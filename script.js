// ==================== ELEMENTOS ====================  //

const badBtt = document.getElementById("bad-btt");
const goodBtt = document.getElementById("good-btt");
const paragrafo = document.getElementById("paragrafo");
const janelaImagem = document.getElementById("janela-imagem");

//Sons
const pretoNoPreto = document.getElementById("preto_no_preto");
const pumImpacto = document.getElementById("pum_impacto");

//Mensagen Especial do Coracion
const specialText = "🟢⬆️Certificado de Promoção🟢⬆️\n\nCargo anterior: Pai da sala\n\n💍Novo Cargo: Padrinho da sala💍 \n\n ✅Status: Aceito com sucesso✅ ";

// ==================== VARIÁVEIS ==================== //
let tamanhoBotao = 5;

let contadorNao = 0;



// ==================== DICIONÁRIO ==================== //

const dicionario = {
    primeiro: "🔪Tem certeza🔪\n Quer mudar a resposta para sim?",
    segundo: "🥺Porfavorzinho🥺",
    terceiro:"😡Não nos deixe na mão😡",
    quarta:"20 + 20 + 20 + 7 =",
    
};

const chaves = Object.keys(dicionario);

let indice = 0;

// ==================== IMAGENS ======================= //

//var pra pegar o id da imagem-central
const imagemCentral = document.getElementById("imagem-central");

const imagens = [
    "imgs/therock.jpg",
    "imgs/serio-neguinho.png",
    "imgs/realistic-sob-crying-emoji.png",
    "imgs/pare-joao.jpg",
    "imgs/sonic.jpg"
];

//var pra armazenar a img_sorteada
let img_sorteada;

//var pra guardar a ultima imagem que foi sorteada
let ultimaImagem = null;

// ==================== FUNÇÕES ======================= //

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
    paragrafo.textContent = specialText;

}

// ==================== EVENTOS ==================== //

goodBtt.addEventListener("click", () => {
    mensagemEspecial();
    tocarMusica();
    tamanhoBotao -= 5;
    goodBtt.style.transform = `scale(${tamanhoBotao})`;

    goodBtt.style.display = "none";
        badBtt.style.display = "none";

    if (tamanhoBotao <= 0) {
        goodBtt.style.display = "none";
        badBtt.style.display = "none";

    }
});


badBtt.addEventListener("click", () => {
    atualizarTexto();
    tocarImpacto();

    if (indice === 4){
        goodBtt.textContent = "💍67💍";

        badBtt.textContent = "76";
    }

        // aumenta 20% a cada clique
    tamanhoBotao += 0.2;



        // Conta quantas vezes o NÃO foi clicado
    contadorNao++;

    // Aumenta o SIM a cada 3 cliques
    if (contadorNao >= 5 ) {
        tamanhoBotao += 0.2;
        goodBtt.style.transform = `scale(${tamanhoBotao})`;
    }

    // aplica o novo tamanho
    
    
    

//    goodBtt.style.width = `${largura}px`;
//  goodBtt.style.height = `${altura}px`;
// //badBtt.style.width = `${largura_nao}px`;
//    badBtt.style.height = `${altura_nao}px`;
//   badBtt.style.fontSize = `${largura_nao}px`;
// badBtt.style.fontSize = `${altura_nao}px`;

    

    pretoNoPreto.pause();

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
imagemCentral.onload = () => {
    janelaImagem.classList.remove("escondido");

    setTimeout(() => {
        janelaImagem.classList.add("escondido");
    }, 500);
};

imagemCentral.src = img_sorteada;
});