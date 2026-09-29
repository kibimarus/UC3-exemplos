// ? Para TAGS é mais comum usarmos 'const' para criar variavel 
// ? 'const' é uma variável que não pode ser editada!
// ? digamos: const idade = 30
// ? Após criar uma variável dessas, nunca mais (nesse código) pode mudar o valor dela. SE RÁ SEMPRE 30
// ? Usamos aqui no JS geralmente em TAGS para que ele fique 'para sempre' naquela TAG. -> Para evitar um posssivel esquecimento do PROGRAMADOR

const tagBtn1 = document.getElementById("btn1")
const tagBtn2 = document.getElementById("btn2")
const tagBtn3 = document.getElementById("btn3")

// ? aqui neste códigp conheceremos as 3 principais formas de conectar botões nas funções

function boasVindas(){
    alert("Seja bem-vindo ao sistema!")
    // ? \n = Pular uma linha no mesmo texto
    alert("Aqui você conhecerá sobre a função\n'AddEventListener'")

}

// ? Conectando os botões direto aqui no JS

tagBtn1.addEventListener('click',boasVindas)

// ? ()=>{} = é oque chamamos de 'Arow Function'
// ? é uma função anônima (sem nome) que possui uma fecha =>
// ? é como uma função completa de uma vez só.
// ? é uma das formas mais utilizadas no JavaScript

tagBtn2.addEventListener('click', () => {
    alert("Essa é a terceira forma")
    // ? seleciona TAG por meio de uma seleção igual o CSS
    document.querySelector(".container>h1").innerHTML = "Foi mudado"

}) 

// ? Mais usado que o on click, mas menos usado que o arow function
// ? Aqui colocamos a função dentro dos parênteses, porém omitimos o nome da função

tagBtn3.addEventListener('click', function (){
    alert("Quarta Forma")
    document.querySelector(".container>h1").style.color = "red";
})