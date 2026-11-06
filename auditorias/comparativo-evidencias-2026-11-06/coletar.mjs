import {readFile,writeFile,readdir,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {home,detail} from '../../site/src/templates.mjs';
import {pages} from '../../site/src/content.mjs';
const evidence=new URL('./',import.meta.url), root=new URL('../../',evidence);
const read=p=>readFile(new URL(p,root),'utf8');
const sha=s=>createHash('sha1').update(`blob ${Buffer.byteLength(s)}\0`).update(s).digest('hex');
const remote=JSON.parse(await readFile(new URL('github-coleta.json',evidence),'utf8'));
const sourceChecks=[];
for(const entry of remote.filter(e=>!e.error)){
 const local=await read(entry.path); let copy=await readFile(new URL('remoto/'+entry.path,evidence),'utf8');
 if(sha(copy)!==entry.sha&&sha(copy.slice(0,-1))===entry.sha){copy=copy.slice(0,-1);await writeFile(new URL('remoto/'+entry.path,evidence),copy);}
 sourceChecks.push({path:entry.path,githubBlobSha:entry.sha,localBlobSha:sha(local),matchesGitHub:sha(local)===entry.sha,archivedMatches:sha(copy)===entry.sha});
}
const rows=[];
for(const slug of ['',...Object.keys(pages)]){
 const file='site/dist/'+(slug?slug+'/':'')+'index.html';const html=await read(file);
 const links=[...html.matchAll(/href="([^"]+)"/g)].map(m=>m[1]);
 rows.push({route:'/'+(slug?slug+'/':''),title:html.match(/<title>(.*?)<\/title>/)?.[1],h1Count:[...html.matchAll(/<h1[ >]/g)].length,lang:html.includes('lang="pt-BR"'),description:!!html.match(/<meta name="description" content="[^"]+"/),canonical:html.includes('rel="canonical"'),main:html.includes('<main id="conteudo">'),residue9:html.includes('$9'),generatedMatchesDist:html===(slug?detail(slug):home()),whatsapp:[...new Set(links.filter(l=>l.startsWith('https://wa.me/')).map(l=>new URL(l.replaceAll('&amp;','&')).searchParams.get('text')))],imageCount:[...html.matchAll(/<img\b/g)].length,imagesMissingAlt:[...html.matchAll(/<img\b[^>]*>/g)].filter(m=>!m[0].includes('alt="')).length,headings:[...html.matchAll(/<h([1-6])[^>]*>(.*?)<\/h\1>/gs)].map(m=>({level:+m[1],text:m[2].replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim()}))});
}
const files=await readdir(new URL('site/dist/assets/',root)); const assets=[];
for(const name of files) assets.push({name,bytes:(await stat(new URL('site/dist/assets/'+name,root))).size});
const lum=h=>{const c=h.match(/\w\w/g).map(n=>parseInt(n,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722;};
const contrast=[['6b4a30','ffffff'],['6b4a30','c8dfbe'],['ffffff','435b3e'],['71675d','ffffff'],['71675d','f8f7f3'],['435b3e','c8dfbe']].map(([fg,bg])=>({fg:'#'+fg,bg:'#'+bg,ratio:+((Math.max(lum(fg),lum(bg))+.05)/(Math.min(lum(fg),lum(bg))+.05)).toFixed(2)}));
const result={date:new Date().toISOString(),method:'Inspeção estática; sem DOM vivo, viewport ou performance',sourceChecks,rows,assets,contrast,robots:await read('site/dist/robots.txt'),sections:Object.values(pages).reduce((n,p)=>n+p.sections.length,0)};
await writeFile(new URL('verificacao-estatica.json',evidence),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({sourceChecks,pages:rows.length,sections:result.sections,distMatches:rows.every(r=>r.generatedMatchesDist),h1:rows.every(r=>r.h1Count===1),descriptions:rows.every(r=>r.description),residue9:rows.some(r=>r.residue9),contrast,cssJs:assets.filter(a=>/\.(css|js)$/.test(a.name)),assetBytes:assets.reduce((n,a)=>n+a.bytes,0)},null,2));
