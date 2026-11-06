# Imagens do redesign

Modo utilizado: ferramenta integrada `image_gen`, conforme skill imagegen. Fotografias ilustrativas geradas por IA; não são clientes, colaboradores ou imóveis da WL. Nenhuma imagem foi gerada para representar um depoimento.

Original preservado em `../design/fotografias-originais.png`. A composição foi separada em quatro fotografias e otimizada com Sharp, em AVIF responsivo e WebP de fallback:

- `../assets/auto-640.avif`, `auto-1024.avif`, `auto-1024.webp`
- `../assets/casa-640.avif`, `casa-1024.avif`, `casa-1024.webp`
- `../assets/vida-640.avif`, `vida-1024.avif`, `vida-1024.webp`
- `../assets/condominio-640.avif`, `condominio-1024.avif`, `condominio-1024.webp`

Não há dependência do caminho temporário da ferramenta nem de um CDN de fotos. A fonte tem 1254×1254px e cada quadrante 627×627px; as versões de 1024px são ampliadas e podem ser substituídas por fotografias originais de maior resolução antes da publicação definitiva.

## Prompt final

```text
Use case: photorealistic-natural. Asset type: four-photo contact sheet for a Brazilian insurance advisory website. Generate one square image split into precisely four equal square quadrants, no gaps and no borders. TOP LEFT: candid editorial photo of a smiling Brazilian woman in her thirties with dark curly hair, light linen shirt, standing next to a modern neutral beige SUV parked safely on a green scenic road, warm daylight, waist-up with the vehicle visible. TOP RIGHT: contemporary welcoming Brazilian living room, cream sofa, wood details, potted plants and bright daylight. BOTTOM LEFT: a happy Brazilian family of three, mother father young daughter, relaxed playing together sitting on a cream sofa, warm natural daylight. BOTTOM RIGHT: tasteful contemporary mid-rise residential condominium with balconies, trees and landscaping in Sao Paulo, no text. Overall olive green and warm brown color harmony, authentic editorial photography, premium but approachable. No logos, no text, no watermarks, no illustrations, no graphic shapes.
```

## Ícones

Font Awesome Free 6: SVGs solid. Licença das imagens SVG: CC BY 4.0, https://fontawesome.com/license/free. Caminhos mantidos em `../src/icons.mjs`, com `aria-hidden` em ícones decorativos e nomes de ação nos controles. As marcas WL são texto e favicon tipográfico, não ícones Font Awesome.
