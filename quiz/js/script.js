
// ! PERGUNTAS DENTRO DO VETOR
// ? Dentro do vetor terão diversos objetos (estruturas com chaves {} com dados dentro)b
const perguntas = [
    {
        pergunta: "Qual linguagem é usada para deixar uma página interativa?",
        alternativas: ["HTML", "CSS", "Javascript", "SQL"],
        correta: 2
    },
    {
        pergunta: "Qual tag HTML cria um botão?",
        alternativas: ["<button>", "<inputText>", "<click>", "<btn>"],
        correta: 0
    },
    {
        pergunta: "Qual propriedade CSS muda a cor do texto?",
        alternativas: ["background", "font-size", "color", "border"],
        correta: 2
    },
    {
        pergunta: "Qual comando exibe algo no console do navegador?",
        alternativas: [
            "print()", 
            "console.log()", 
            "show()", 
            "document.console()"
        ],
        correta: 1
    }
]

// Pegando as Tags/Elementos do HTML

const tagPergunta = document.getElementById("pergunta")
const tagAlternativas = document.getElementById("alternativas")
const tagResultado = document.getElementById("resultado")
const tagNumero = document.getElementById("numero-pergunta")
const botaoProxima = document.getElementById("proxima")
// Variáveis de controle

let perguntaAtual = 0
let pontos = 0

// ? MOSTRAR A PERGUNTA ATUAL 

function mostrarPergunta(){
    // ? a variável 'perguntaAtual'  será usada como indice na lista de perguntas
    let pergunta = perguntas [perguntaAtual]

    // ? EDITA 'P' COM O NÚMERO DA PERGUNTA ATUAL
    // ? MOSTARNDO ALGO COMO 'PERGUNTA 3 DE 4'
    // ? 'LENGHT' CONTA O TOTAL DE ITENS QUE TEM NO VETOR 'PERGUNTAS'
    tagNumero.innerText = 
        "pergunta " + (perguntaAtual + 1  ) +  " de " +  perguntas.length;

        // ? MOSTRANDO A PERGUNTA:
        // :? pergunta  = o primeiro variável e o segundo  é 'atributo" dentro do objeto
        tagPergunta.innerHTML = pergunta.pergunta

        // ? zerando alternativas  e resultados 
        tagAlternativas.innerHTML = ""
        tagResultado.innerHTML = ""
        // ? Sumindo com o botão (editando CSS)
        botaoProxima.style.display = "none"

        // ? Criar botao para cada alternativa (COM LOOP)
        // ? i < pergunta.alternativas.lengh; 1 ++
        // ?  
        for(let i = 0; i < pergunta.alternativas.length; i++){
        // ? CRIAT TAG
        let botao = document.createElement("button")
        // ? ESCREVENDO  DENTRO Do BOTÃO =  A ALTERNATIVA  DA VEZ
        botao.innerText = pergunta.alternativas[i]
        // ? colocar classes dentro da tag  recém criada para o css 
        botao.className = "alternativa"

            botao.onclick = function(){
            // ? chama a  função responder passando o nº da alternativa
            responder(i)
            }

        tagAlternativas.appendChild(botao)
        }
}
// ? FUNÇÃO QUE VERIFICA SE O JOGADOR ACERTOU 
// ? ELE É CHAMADO PELO <BUTTON> DE ALTERNATIVA
function responder(resposta){
    // ? pega pergunta que está na tela (pergunta atual)
    let pergunta = perguntas[perguntaAtual]

    if(resposta == pergunta.correta){
        pontos++
        tagResultado.innerText = "✅ Resposta Correta"
        tagResultado.style.color = "var(--cor-acerto)"
    }

    else{
        tagResultado.innerText = "❌ Resposta Incorreta"
        tagResultado.style.color = "var(--cor-erro)"
    }

    // ? Desativar os botões  da outras alternativas
    // ? Selecionando  TODOS os botões 
    let botoes = document.getElementsByClassName("alternativa")

    for (botao of botoes){
        botao.disabled = true
    }
    // ? Fzendo o botão 'próxima pergunta' aparecer 
    // ? por natureza o display do botão é 'none' (que é invisível)
    // ? Aqui, após ele responder, mudamos o display dele
    botaoProxima.style.display = "block"
}

function proximaPergunta(){
    // ? Aumente a variável  para  a proxima pergunta
    perguntaAtual++

    // ? Mas  precisamos  checar  para ele não ir para frente infinito. pergunta 50 se spo existe 4

    if (perguntaAtual < perguntas.length){
        mostrarPergunta()
    }

    else{
        finalizarQuiz()
    }
}

function finalizarQuiz(){
    tagNumero. innerText = "Quiz finalizado"

    tagPergunta.innerText = "Você acertou " + pontos + " de " + perguntas.length + " perguntas";

    tagAlternativas.innerHTML = ""
    tagResultado.innerText = "Obrigado por jogar !"
    botaoProxima.style.display = "none"


}
mostrarPergunta()

