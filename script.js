// ==================== ELEMENTOS ====================  //

const badBtt = document.getElementById("bad-btt");
const goodBtt = document.getElementById("good-btt");
const paragrafo = document.getElementById("paragrafo");
const janelaImagem = document.getElementById("janela-imagem");

//Sons
const pretoNoPreto = document.getElementById("preto_no_preto");
const pumImpacto = document.getElementById("pum_impacto");

const janelaVideo = document.getElementById("janela-video");


//Mensagen Especial do Coracion
const specialText = "🟢⬆️Certificado de Promoção🟢⬆️\n\nCargo anterior: Pai da sala\n\n💍Novo Cargo: Padrinho da sala💍 \n\n ✅Status: Aceito com sucesso✅ ";

// ==================== VARIÁVEIS ==================== //
let tamanhoBotao = 5;

let contadorNao = 0;



// ==================== DICIONÁRIO ==================== //

const dicionario = {
    primeiro: "🔪Tem certeza🔪\n Quer mudar a resposta para sim?",
    segundo: "🥺Porfavorzinho🥺",
    quarta:"20 + 20 + 20 + 7 =",
    terceiro:"O Pessoal vai PARAR de jogar na sua aula! Quer mudar sua resposta para 'sim'?",
    
};

const chaves = Object.keys(dicionario);

let indice = 0;

// ==================== IMAGENS ======================= //

//var pra pegar o id da imagem-central
const imagemCentral = document.getElementById("imagem-central");

const videoCentral = document.getElementById("video-central");



const imagens = [
    "imgs/therock.jpg",
    "imgs/serio-neguinho.png",
    "imgs/realistic-sob-crying-emoji.png",
    "imgs/pare-joao.jpg",
    "imgs/sonic.jpg"
];

//var pra armazenar a img_sorteada
let img_sorteada;

//var pra gua
// rdar a ultima imagem que foi sorteada
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

    janelaVideo.classList.remove("escondido");

    setTimeout(() => {
        janelaVideo.classList.add("escondido");
    }, 5000);

    setTimeout(()=>{
        location.reload();
    },25000)

});



badBtt.addEventListener("click", () => {
    atualizarTexto();
    tocarImpacto();

    if (indice === 3){
        goodBtt.textContent = "💍67💍";

        badBtt.textContent = "76";
    }

        // aumenta 20% a cada clique
    tamanhoBotao += 0.2;



        // Conta quantas vezes o NÃO foi clicado
    contadorNao++;

    if(indice === 4){
            goodBtt.textContent = "SIM"
            
            badBtt.textContent = "NÃO"

            
        }

    // Aumenta o SIM a cada 3 cliques
    if (contadorNao >= 5 ) {
        tamanhoBotao += 0.2;
        goodBtt.style.transform = `scale(${tamanhoBotao})`;
    }

    if(indice === 5){
        goodBtt.textContent = "!!!NÂO HÁ ESCOLHA!!!"

    }    

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

    imagemCentral.onload = () => {
        janelaImagem.classList.remove("escondido");
        
        setTimeout(() => {
            janelaImagem.classList.add("escondido");
        }, 500);
    };
    imagemCentral.src = img_sorteada;
});
    
