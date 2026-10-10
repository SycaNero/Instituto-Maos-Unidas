// Teste simples de acessibilidade estática: roda com "npm test"
import { readFileSync, readdirSync } from 'node:fs';

const paginas = readdirSync('.').filter((f) => f.endsWith('.html'));
let falhas = 0;
const erro = (p, msg) => { console.error(`✗ ${p}: ${msg}`); falhas++; };

for (const p of paginas) {
  const html = readFileSync(p, 'utf8');
  if (!/<html[^>]*lang="pt-BR"/.test(html)) erro(p, 'falta lang="pt-BR"');
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) erro(p, 'deve ter exatamente um <h1>');
  for (const tag of ['<header', '<nav', '<main', '<footer']) if (!html.includes(tag)) erro(p, `falta ${tag}>`);
  if (!html.includes('class="pular"')) erro(p, 'falta o link "Pular para o conteúdo"');
  for (const img of html.match(/<img[^>]*>/g) || []) if (!/\salt=/.test(img)) erro(p, `imagem sem alt: ${img.slice(0, 60)}`);
  for (const campo of html.match(/<(input|select|textarea)[^>]*id="([^"]+)"/g) || []) {
    const id = campo.match(/id="([^"]+)"/)[1];
    if (!html.includes(`for="${id}"`)) erro(p, `campo #${id} sem <label for>`);
  }
  if (!/<meta name="viewport"/.test(html)) erro(p, 'falta meta viewport');
}
if (falhas) { console.error(`\n${falhas} problema(s) encontrado(s).`); process.exit(1); }
console.log(`✓ ${paginas.length} páginas verificadas sem problemas.`);
