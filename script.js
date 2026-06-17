var bad_btt     = document.getElementById("bad-btt");
const botao     = document.querySelector('#meuBotao');
const paragrafo = document.querySelector('#paragrafo');

//dicionário com os textos que serão exibidos a cada clique
const dicionario = {

    primeiro: "teste",

    segundo: "teste 2"
}

//extrai as chaves do dicionário em um array: ["primeiro", "segundo"]
const chaves = Object.keys(dicionario);
var indice   = 0;

function atualizar_texto()
{
    //incremento ao indice 
    indice++;

    //só atualiza enquanto ainda houver textos no dicionário
    //se tiver dois itens, ele nn vai tentar verificar um terceiro
    if (indice <= chaves.length) 
    {
        //altera o texto do h2
        // O -1 compensa o incremento acima: 
        // se indice é 1, queremos chaves[0] (texto 1)                             
        // se indice é 2, queremos chaves[1] (texto 2)...
        paragrafo.textContent = dicionario[chaves[indice - 1]];
    }

}

//quando eu clico no botão não, a funççao de atualizar_texto é chamada
bad_btt.addEventListener('click', atualizar_texto);


// // Quando clica no SIM, muda o texto da pergunta
// botao.addEventListener('click', () => {
//     // Toda vez que clica, o índice aumenta 1
//     indice++;

//     // Verifica se o índice ainda existe dentro do nosso dicionário
//     if (indice === 1) {
//         // chaves[0] é "primeiro" -> dicionario["primeiro"] é "teste"
//         paragrafo.textContent = dicionario[chaves[0]]; 
//     } 
//     else if (indice === 2) {
//         // chaves[1] é "segundo" -> dicionario["segundo"] é "teste 2"
//         paragrafo.textContent = dicionario[chaves[1]];
//     }
// });



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