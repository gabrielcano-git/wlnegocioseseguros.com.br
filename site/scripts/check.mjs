import { readFile, readdir, stat, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const dist=resolve(root,'dist');
const failures=[];const htmls=[];
async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const p=resolve(dir,entry.name);if(entry.isDirectory())await walk(p);else if(extname(p)==='.html')htmls.push(p);}}
await walk(dist);
for(const file of htmls){
 const html=await readFile(file,'utf8');const name=file.replace(dist+'/','');
 if((html.match(/<h1[ >]/g)||[]).length!==1)failures.push(`${name}: H1 count`);
 if(!html.includes('lang="pt-BR"'))failures.push(`${name}: language`);
 if(!/<title>.+<\/title>/.test(html)||!/<meta name="description" content=".+?">/.test(html))failures.push(`${name}: metadata`);
 if(!/<main id="conteudo">/.test(html))failures.push(`${name}: main landmark`);
 for(const m of html.matchAll(/<img\b[^>]*>/g))if(!/\balt="/.test(m[0])||!/width="\d+"/.test(m[0])||!/height="\d+"/.test(m[0]))failures.push(`${name}: image accessibility/dimensions`);
 for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const href=m[1];if(/^(?:https?:|mailto:|tel:)/.test(href))continue;
  const [path,anchor]=href.split('#');let target=path?(path.startsWith('/')?resolve(dist,'.'+path):resolve(dirname(file),path)):file;
  try{if((await stat(target)).isDirectory())target=resolve(target,'index.html');await stat(target);}catch{failures.push(`${name}: missing ${href}`);continue;}
  if(anchor&&extname(target)==='.html'){
   const targetHtml=target===file?html:await readFile(target,'utf8');
   if(!targetHtml.includes(`id="${anchor}"`))failures.push(`${name}: missing anchor ${href}`);
  }
 }
 for(const m of html.matchAll(/href="(https:\/\/wa.me\/[^\"]+)"/g)){
  const u=new URL(m[1].replaceAll('&amp;','&'));if(u.pathname!=='/5511932039326'||!u.searchParams.get('text'))failures.push(`${name}: WhatsApp context`);
 }
 if(/↗|→|➜|➡/.test(html))failures.push(`${name}: decorative arrow`);
}
const rgb=hex=>hex.match(/[\da-f]{2}/gi).map(n=>parseInt(n,16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);
const lum=hex=>{const [r,g,b]=rgb(hex);return .2126*r+.7152*g+.0722*b;};
const contrast=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);};
const pairs=[['Texto marrom / branco','#6b4a30','#ffffff'],['Texto marrom / verde claro','#6b4a30','#c8dfbe'],['Botão branco / verde escuro','#ffffff','#435b3e'],['Texto secundário / branco','#71675d','#ffffff'],['Texto secundário / fundo claro','#71675d','#f8f7f3'],['Verde escuro / verde claro','#435b3e','#c8dfbe']].map(([use,fg,bg])=>({use,foreground:fg,background:bg,ratio:Number(contrast(fg,bg).toFixed(2))}));
for(const p of pairs)if(p.ratio<4.5)failures.push(`Contrast: ${p.use} ${p.ratio}`);
const css=await readFile(resolve(dist,'assets/styles.css'),'utf8');
if(!css.includes('.grid{display:grid}')||!css.includes('md\\:grid-cols-3'))failures.push('Tailwind grid utilities not generated');
if(!css.includes('prefers-reduced-motion'))failures.push('Reduced motion stylesheet missing');
const assetEntries=await readdir(resolve(dist,'assets'));let bytes=0;for(const f of assetEntries)bytes+=(await stat(resolve(dist,'assets',f))).size;
const report={date:new Date().toISOString(),method:'Static build checks; no browser runtime',pages:htmls.length,failures,contrast:pairs,assets:{count:assetEntries.length,bytes},browser:'blocked: Chromium MachPortRendezvousServer permission denied',pagespeed:'not measured'};
await mkdir(resolve(root,'docs'),{recursive:true});
await writeFile(resolve(root,'docs/validacao-estatica.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
if(failures.length)process.exitCode=1;
