import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname, sep } from 'node:path';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'../dist');
const port=Number(process.env.PORT||4173);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.avif':'image/avif','.webp':'image/webp','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  let file=resolve(root,'.'+pathname);
  if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403);return res.end();}
  try{if((await stat(file)).isDirectory()){
   if(!pathname.endsWith('/')){res.writeHead(301,{Location:pathname+'/'});return res.end();}
   file=resolve(file,'index.html');
  }}catch{file=resolve(root,'404.html');res.statusCode=404;}
  const data=await readFile(file);
  res.setHeader('Content-Type',types[extname(file)]||'application/octet-stream');
  res.setHeader('X-Content-Type-Options','nosniff');
  res.end(data);
 }catch{res.writeHead(500);res.end('Erro ao carregar a página.');}
}).on('error', error => { console.error(`Não foi possível abrir a prévia: ${error.message}`); process.exitCode = 1; }).listen(port,'127.0.0.1',()=>console.log(`WL preview: http://127.0.0.1:${port}`));
