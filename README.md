# Instituto Mãos Unidas — Site da ONG

Site acessível (WCAG 2.1 nível AA) para uma ONG fictícia, com páginas de apresentação, doações e cadastro de voluntários. Projeto da **Experiência Prática IV – Desenvolvimento Front-end**.

- 🌐 **Site publicado:** https://SEU-PROJETO.vercel.app  *(troque pelo link real)*
- 📦 **Repositório:** https://github.com/SEU-USUARIO/SEU-REPOSITORIO

> Adicione aqui capturas de tela (`docs/`) e o print do relatório Lighthouse.

## Sobre o projeto

Plataforma digital para divulgar as causas da ONG, captar doações e engajar voluntários. Foco em acessibilidade, desempenho e boas práticas de versionamento.

## Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura, landmarks e ARIA |
| CSS3 | Layout responsivo, variáveis CSS e temas |
| JavaScript (ES modules) | Menu, temas, validação do formulário |
| Vite 5 | Bundler, minificação e servidor de desenvolvimento |
| Git / GitHub | Versionamento (GitFlow), issues, milestones e PRs |
| Vercel | Deploy contínuo |
| Lighthouse, axe DevTools, WAVE | Auditoria de acessibilidade e desempenho |

## Pré-requisitos

- [Node.js](https://nodejs.org) 18 ou superior (inclui o npm)
- [Git](https://git-scm.com)

## Instalação

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
cd SEU-REPOSITORIO
npm install
```

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor local com recarga automática (endereço mostrado no terminal) |
| `npm run build` | Gera a versão de produção minificada na pasta `dist/` |
| `npm run preview` | Serve a pasta `dist/` localmente para testar a build |
| `npm test` | Verifica regras básicas de acessibilidade nos HTML (lang, h1, landmarks, alt, labels) |

## Estrutura de pastas

```
.
├── index.html           # Página inicial
├── doacoes.html         # Página de doações
├── voluntariado.html    # Formulário de voluntários
├── src/
│   ├── css/style.css    # Estilos e temas (variáveis CSS)
│   └── js/main.js       # Temas, menu e validação
├── public/              # Favicon e imagens otimizadas (WebP + JPEG, 3 tamanhos)
├── scripts/check.mjs    # Teste de acessibilidade estática
├── vite.config.js       # Configuração do build (todas as páginas)
└── package.json
```

## Acessibilidade (WCAG 2.1 AA)

- **Semântica:** `header`, `nav` (com `aria-label`), `main`, `section` (com `aria-labelledby`), `footer`, `lang="pt-BR"` e hierarquia de títulos sem saltos.
- **Teclado:** link "Pular para o conteúdo", foco visível (`:focus-visible`, 3 px), menu com `aria-expanded`/`aria-controls` e fechamento com Esc.
- **Formulário:** `label` associado, `aria-required`, `aria-describedby` para dicas e erros, `aria-live` para a mensagem de sucesso; erros nunca dependem só de cor (texto + borda mais grossa).
- **Contraste:** tema claro, escuro e alto contraste (botões com `aria-pressed`), respeitando `prefers-color-scheme`, `prefers-contrast` e `prefers-reduced-motion`. A escolha fica salva no `localStorage`.

| Combinação | Cores | Razão |
|---|---|---|
| Texto (claro) | #1A1A1A / #FFFFFF | 17,4:1 |
| Link e botão (claro) | #0B5CAD / #FFFFFF | 6,7:1 |
| Texto secundário | #595959 / #FFFFFF | 7,0:1 |
| Borda de campo | #767676 / #FFFFFF | 4,5:1 |
| Erro | #B3261E / #FFFFFF | 6,5:1 |
| Texto e link (escuro) | #E8E8E8 e #8AB4F8 / #121212 | 15,3:1 e 8,9:1 |
| Alto contraste | #FFFFFF e #FFFF00 / #000000 | 21:1 e 19,6:1 |

## Desempenho

- Minificação de CSS e JS pelo Vite (esbuild), com nomes de arquivo com hash para cache.
- Imagens em WebP com fallback JPEG, em 480, 800 e 1200 px (`<picture>` + `srcset`/`sizes`), com `width`/`height` definidos.
- Imagem principal com `fetchpriority="high"`.

## Fluxo de contribuição (GitFlow)

| Branch | Função |
|---|---|
| `main` | Código estável; cada versão recebe uma tag (`v1.0.0`) |
| `develop` | Integração do desenvolvimento |
| `feature/*` | Uma funcionalidade, criada a partir da `develop` |
| `release/*` | Preparação de versão (criada da `develop`, mesclada na `main` e na `develop`) |
| `hotfix/*` | Correção urgente criada a partir da `main` |

1. Crie uma issue descrevendo a tarefa e vincule ao milestone.
2. Crie a branch: `git checkout -b feature/nome develop`.
3. Faça commits semânticos ([Conventional Commits](https://www.conventionalcommits.org/pt-br)): `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `chore:`.
4. Abra um Pull Request para a `develop`, descreva o que mudou, por quê e como testou (use `Closes #n`).
5. Após revisão, faça o merge.

**Versionamento semântico:** `MAJOR.MINOR.PATCH`. Versões publicadas: `v0.1.0` (estrutura inicial), `v1.0.0` (primeira versão estável) e `v1.0.1` (correção de contraste).

## Manutenção

- Novas páginas HTML devem ser adicionadas em `build.rollupOptions.input` no `vite.config.js`.
- Rode `npm test` e `npm run build` antes de abrir um PR.
- Reaudite com Lighthouse e axe após mudanças visuais.

## Deploy

Publicado na Vercel a partir da branch `main` (Build Command: `npm run build`; Output Directory: `dist`). Cada Pull Request gera um link de preview.

## Licença e autoria

MIT — veja [LICENSE](LICENSE). Autor(a): **Miguel** (SycaNero). Imagens geradas para este projeto; ONG e dados fictícios.
