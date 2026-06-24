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

// ==================== IMAGENS =======================

//var pra pegar o id da imagem-central
const imagemCentral = document.getElementById("imagem-central");

const imagens = [
    "/imgs/therock.jpg",
    "/imgs/serio-neguinho.png",
    "/imgs/realistic-sob-crying-emoji.png"
];

//var pra armazenar a img_sorteada
let img_sorteada;

//var pra guardar a ultima imagem que foi sorteada
let ultimaImagem = null;

// ==================== FUNÇÕES =======================

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

}

// ==================== EVENTOS ====================

goodBtt.addEventListener("click", () => {
    mensagemEspecial();
    tocarMusica();
});


badBtt.addEventListener("click", () => {
    atualizarTexto();
    tocarImpacto();

    // Sorteia até pegar uma diferente da última
    do 
    {
        //pega um índice aleatório entre 0 e o tamanho do array 
        //math.floor arrendonda e transforma em n° inteiro
        img_sorteada = imagens[Math.floor(Math.random() * imagens.length)];
    } 

    //repete o sorteio se cair na mesma da última vez
    while (img_sorteada === ultimaImagem);
    
    //salva a imagem sorteada como "última"
    ultimaImagem = img_sorteada;

    //troca o scr da imagem do meu html pelo scr da imagem sorteada
    imagemCentral.src = img_sorteada;

    //Mostra a imagem
    janelaImagem.classList.remove("escondido");

    //Esconde depois de 1 segundos
    setTimeout(() => {
        janelaImagem.classList.add("escondido");
        //paragrafo.textContent = dicionario.primeiro;
    }, 1000);

});