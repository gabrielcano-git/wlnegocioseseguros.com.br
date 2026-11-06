import { readFile, writeFile, mkdir, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import * as sass from 'sass';
import { home, detail, shell } from '../src/templates.mjs';
import { pages } from '../src/content.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const out=resolve(root,'dist');
await rm(out,{recursive:true,force:true});
await mkdir(resolve(out,'assets'),{recursive:true});
await mkdir(resolve(root,'.cache'),{recursive:true});
await cp(resolve(root,'assets'),resolve(out,'assets'),{recursive:true});
await writeFile(resolve(out,'index.html'),home());
for(const slug of Object.keys(pages)){
 await mkdir(resolve(out,slug),{recursive:true});
 await writeFile(resolve(out,slug,'index.html'),detail(slug));
}
const css=sass.compile(resolve(root,'src/styles.scss'),{style:'expanded'}).css;
await writeFile(resolve(root,'.cache/styles.css'),css);
execFileSync(process.execPath,[resolve(root,'node_modules/tailwindcss/lib/cli.js'),'-c',resolve(root,'tailwind.config.cjs'),'-i',resolve(root,'.cache/styles.css'),'-o',resolve(out,'assets/styles.css'),'--minify'],{cwd:root,stdio:'inherit'});
await cp(resolve(root,'src/app.js'),resolve(out,'assets/app.js'));
await writeFile(resolve(out,'404.html'),shell({title:'Página não encontrada',description:'Encontre os seguros e serviços da WL.',base:'/',body:'<section class="section"><div class="container"><p class="eyebrow">PÁGINA NÃO ENCONTRADA</p><h1>Vamos encontrar<br>o seu caminho.</h1><p style="margin-block:2rem">Conheça as opções de seguros ou converse com nossa equipe.</p><a class="button button--primary" href="/">Ir para o início</a></div></section>'}));
// Keep the preview out of search engines until a real production origin is configured.
const origin=process.env.SITE_URL?.replace(/\/$/,'');
const slugs=['',...Object.keys(pages)];
if(origin){
 const u=new URL(origin);
 if(u.protocol!=='https:') throw Error('SITE_URL deve usar HTTPS.');
 for(const slug of slugs){const f=resolve(out,slug,'index.html');const html=await readFile(f,'utf8');await writeFile(f,html.replace('</head>',`<link rel="canonical" href="${origin}/${slug?slug+'/':''}"></head>`));}
 await writeFile(resolve(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${slugs.map(s=>`<url><loc>${origin}/${s?s+'/':''}</loc></url>`).join('')}</urlset>`);
 await writeFile(resolve(out,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
}else{
 await writeFile(resolve(out,'robots.txt'),'User-agent: *\nDisallow: /\n');
}
await writeFile(resolve(out,'.nojekyll'),'');
console.log(`Built ${slugs.length} static pages plus 404 in site/dist.`);
