var bad_btt = document.getElementById("bad-btt");
const botao     = document.querySelector('#meuBotao');
// const paragrafo = document.querySelector('#paragrafo');
const paragrafo = document.querySelector('#paragrafo');

const chaves = Object.keys(dicionario);

var indice = 0;

const dicionario = {

    primeiro: "teste",

    segundo: "teste 2"
}



// Quando clica no SIM, muda o texto da pergunta
botao.addEventListener('click', () => {
    // Toda vez que clica, o índice aumenta 1
    indice++;

    // Verifica se o índice ainda existe dentro do nosso dicionário
    if (indice === 1) {
        // chaves[0] é "primeiro" -> dicionario["primeiro"] é "teste"
        paragrafo.textContent = dicionario[chaves[0]]; 
    } 
    else if (indice === 2) {
        // chaves[1] é "segundo" -> dicionario["segundo"] é "teste 2"
        paragrafo.textContent = dicionario[chaves[1]];
    }
});

//   if (paragrafo.textContent === "Texto Original da Página") {
//     paragrafo.textContent = "O texto foi alterado!";
    
    
// }
//     if(paragrafo.textContent === "TExto OLIGINAL DA CHINA"){
//         paragrafo.textContent = "O TEXTO FOI ALTELADO";

//     }

// else {
//   paragrafo.textContent = "Texto Original da Página";
// }

// });