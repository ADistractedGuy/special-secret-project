// ==================== ELEMENTOS ====================

const badBtt = document.getElementById("bad-btt");
const goodBtt = document.getElementById("good-btt");
const paragrafo = document.getElementById("paragrafo");
const janelaImagem = document.getElementById("janela-imagem");

const pretoNoPreto = document.getElementById("preto_no_preto");
const pumImpacto = document.getElementById("pum_impacto");

// ==================== DICIONÁRIO ====================

const dicionario = {
    primeiro: "teste",
    segundo: "teste 2",
    special: "Texto Especial"
};

const chaves = Object.keys(dicionario);

let indice = 0;

// ==================== FUNÇÕES ====================

function atualizarTexto() {
    indice++;

    if (indice <= chaves.length) {
        paragrafo.textContent =
            dicionario[chaves[indice - 1]];
    }
}

function tocarImpacto() {
    pumImpacto.currentTime = 0.3;
    pumImpacto.play();
}

function tocarMusica() {
    pretoNoPreto.currentTime = 5;
    pretoNoPreto.play();

    setTimeout(() => {
        pretoNoPreto.pause();
    }, 24000);
}

function mensagemEspecial() {
    paragrafo.textContent = dicionario.special;

    // Mostra a imagem
    janelaImagem.classList.remove("escondido");

    // Esconde depois de 3 segundos
    setTimeout(() => {
        janelaImagem.classList.add("escondido");
        paragrafo.textContent = dicionario.primeiro;
    }, 20000);
}

// ==================== EVENTOS ====================

goodBtt.addEventListener("click", () => {
    mensagemEspecial();
    tocarMusica();
});

badBtt.addEventListener("click", () => {
    atualizarTexto();
    tocarImpacto();
});