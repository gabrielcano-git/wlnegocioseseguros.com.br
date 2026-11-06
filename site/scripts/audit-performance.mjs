import { spawn } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages } from '../src/content.mjs';

// Run via npm exec so Lighthouse is on PATH without adding it to the site bundle.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'docs/core-web-vitals/lighthouse');
const runs = Number(process.env.AUDIT_RUNS || 3);
if (!Number.isInteger(runs) || runs < 1 || runs > 10) throw Error('AUDIT_RUNS deve estar entre 1 e 10.');
const port = process.env.PORT || '4173';
const report = { date: new Date().toISOString(), status: 'running', target: 100,
  scope: 'Local lab, all 14 content pages, mobile and desktop; no field INP',
  runs, results: [], error: null };
await mkdir(output, { recursive: true });
let server;

function run(command, args) {
  return new Promise((resolveRun, reject) => {
    const child = spawn(command, args, { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] });
    let log = '';
    child.stdout.on('data', data => { log = (log + data).slice(-8000); });
    child.stderr.on('data', data => { log = (log + data).slice(-8000); });
    child.once('error', reject);
    child.once('exit', code => code === 0 ? resolveRun() : reject(Error(log || `${command}: exit ${code}`)));
  });
}

try {
  await new Promise((ready, reject) => {
    server = spawn(process.execPath, ['scripts/serve.mjs'], { cwd: root, env: { ...process.env, PORT: port }, stdio: ['ignore', 'pipe', 'pipe'] });
    const timeout = setTimeout(() => reject(Error('Servidor de auditoria não iniciou em 5s.')), 5000);
    const done = action => value => { clearTimeout(timeout); action(value); };
    server.once('error', done(reject));
    server.once('exit', done(code => reject(Error(`Servidor de auditoria: exit ${code}`))));
    server.stderr.on('data', done(data => reject(Error(String(data)))));
    server.stdout.on('data', data => { if (String(data).includes('WL preview:')) done(ready)(); });
  });
  for (const slug of ['', ...Object.keys(pages)]) {
    for (const device of ['mobile', 'desktop']) {
      const samples = [];
      for (let index = 1; index <= runs; index++) {
        const name = `${slug || 'home'}-${device}-${index}`;
        const prefix = resolve(output, name);
        await run('lighthouse', [`http://127.0.0.1:${port}/${slug ? `${slug}/` : ''}`,
          '--only-categories=performance', '--output=json', '--output=html', `--output-path=${prefix}`,
          '--chrome-flags=--headless', '--quiet', ...(device === 'desktop' ? ['--preset=desktop'] : [])]);
        const result = JSON.parse(await readFile(`${prefix}.report.json`, 'utf8'));
        if (result.runtimeError) throw Error(JSON.stringify(result.runtimeError));
        if (typeof result.categories.performance.score !== 'number') throw Error('Lighthouse não retornou uma nota de performance.');
        const metrics = Object.fromEntries(['first-contentful-paint', 'largest-contentful-paint', 'speed-index',
          'total-blocking-time', 'cumulative-layout-shift'].map(id => [id, result.audits[id].numericValue]));
        samples.push({ score: result.categories.performance.score * 100, metrics, file: `${name}.report.html`,
          lighthouseVersion: result.lighthouseVersion, environment: result.environment });
      }
      const sorted = samples.map(sample => sample.score).sort((a,b) => a-b);
      const middle = Math.floor(sorted.length / 2);
      const median = sorted.length % 2 ? sorted[middle] : (sorted[middle-1] + sorted[middle]) / 2;
      report.results.push({ path: `/${slug ? `${slug}/` : ''}`, device, median, samples });
      console.log(`${device} /${slug}: ${median.toFixed(1)}/100 (mediana de ${runs})`);
    }
  }
  report.status = report.results.every(result => result.median >= report.target) ? 'passed' : 'below-target';
} catch (error) {
  report.status = 'blocked';
  report.error = error.message;
  console.error(report.error);
} finally {
  server?.kill();
  await writeFile(resolve(output, 'summary.json'), JSON.stringify(report, null, 2) + '\n');
}
if (report.status !== 'passed') process.exitCode = 1;
