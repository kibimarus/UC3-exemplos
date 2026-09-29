
// ? Primeiro selecionaremos TODAS as TAGS com a CLASSE .slide Eles serão colocados em um vetor/lista
// ? getElementsByClassName = pega varias tags de uma vez só.


const slides = document.getElementsByClassName("slide")

// ? slides é um vetor, e lembrando: vetor se conta do 0!

/* 
    slide 1 = posição 0
    slide 2 = posição 1
    slide 3 = posição 2
    slide 4 = posição 3
*/

// ? a variável abaixo é um contador para sabermos e controlarmos quel é o slide atual (e trocar para os proximos)

let slideAtual = 0

// ? Função que recebe como parâmetro qual o slide que ela vai mostrar

function mostrarSlide(posicao){
    // ? esconde todos os slides
    // ? let i = 0; - Cria a varíavel de contador do loop
    // ? i < slides.length -  condição para repetir
    //  ? i++ - de quanto em quanto sobe o contador
    for( let i = 0; i < slides.length; i++) {
        // ?slides [i] = Acessando o slide da vez
        // ? classList.remove = remove uma classe de uma tag
        slides[i].classList.remove("ativo")
    }
    // ? após limpar todos, ele ativa o atual (posicao)
    slides[posicao].classList.add("ativo")
}

function avancarSlide(){
    // ? aumentamos o contador
        slideAtual++

    // porém existe um problema. não são slides infinitos
    // dessa forma, se o número chegar no slide final. ele deve resetar pro slide 0. (chegou no Slide 3, clicou no próximo ele volta para o 0 )
    // ? slides.length- conta do 1 (então ele terá o número 4)

    if (slideAtual >= slides.length){
        slideAtual = 0
    }

    // ? Após aumentar o contador , mostramos ele
    mostrarSlide(slideAtual)
}

//////////////////////////////////////////////////////////////////////////////////////////////////

// ? Voltar slide

function voltarSlide(){
    slideAtual--

    // ? checar limite

    if (slideAtual < 0){
        slideAtual = slides.length-1
    }

    mostrarSlide(slideAtual)
}


// ? chamr função sozinho em um intervalo em milisegundos
// ? 3000ms = 3 segundos
setInterval(avancarSlide, 3000)