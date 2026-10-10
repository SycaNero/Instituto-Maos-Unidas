// ===== Temas (escuro e alto contraste) =====
const raiz = document.documentElement;

function lerTema() {
  try { return localStorage.getItem('tema'); } catch { return null; }
}
function salvarTema(valor) {
  try {
    if (valor) localStorage.setItem('tema', valor);
    else localStorage.removeItem('tema');
  } catch { /* armazenamento indisponível: segue sem salvar */ }
}
function aplicarTema(valor) {
  if (valor) raiz.setAttribute('data-theme', valor);
  else raiz.removeAttribute('data-theme');
  document.querySelectorAll('[data-tema]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.tema === valor));
  });
}
aplicarTema(lerTema());

document.querySelectorAll('[data-tema]').forEach((botao) => {
  botao.addEventListener('click', () => {
    const alvo = botao.dataset.tema;
    const atual = raiz.getAttribute('data-theme');
    const novo = atual === alvo ? null : alvo; // clicar de novo volta ao padrão
    salvarTema(novo);
    aplicarTema(novo);
  });
});

// ===== Menu mobile =====
const menuBtn = document.querySelector('.menu-btn');
const menuLista = document.getElementById('menu-lista');
if (menuBtn && menuLista) {
  const alternar = (abrir) => {
    menuLista.classList.toggle('aberto', abrir);
    menuBtn.setAttribute('aria-expanded', String(abrir));
  };
  menuBtn.addEventListener('click', () => alternar(menuBtn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
      alternar(false);
      menuBtn.focus();
    }
  });
}

// ===== Validação do formulário de voluntariado =====
const form = document.getElementById('form-voluntario');
if (form) {
  const regras = {
    nome: (v) => (v.trim().length >= 3 ? '' : 'Informe seu nome completo (mínimo 3 letras).'),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Informe um e-mail válido, como nome@exemplo.com.'),
    area: (v) => (v ? '' : 'Escolha uma área de interesse.'),
  };
  const resumo = document.getElementById('status-form');

  const validar = (campo) => {
    const msg = regras[campo.name](campo.value);
    const erro = document.getElementById(`erro-${campo.name}`);
    erro.textContent = msg;
    erro.hidden = !msg;
    campo.setAttribute('aria-invalid', String(Boolean(msg)));
    return !msg;
  };

  Object.keys(regras).forEach((nome) => {
    form.elements[nome].addEventListener('blur', (e) => validar(e.target));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const campos = Object.keys(regras).map((n) => form.elements[n]);
    const invalidos = campos.filter((c) => !validar(c));
    if (invalidos.length) {
      resumo.className = '';
      resumo.textContent = `Há ${invalidos.length} campo(s) com erro. Corrija e envie novamente.`;
      invalidos[0].focus();
      return;
    }
    resumo.className = 'sucesso';
    resumo.textContent = 'Cadastro recebido! Obrigado por querer ajudar. Entraremos em contato por e-mail.';
    form.reset();
  });
}
