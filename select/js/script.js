// ? 'const' é mais usado que 'let' para variáveis de TAG
const tagSelect = document.getElementById("linguagem") 
const btnSelecionar = document.getElementById("selecionar")

btnSelecionar.addEventListener("click", () =>{
    let linguagemSelecionada = tagSelect.value
    if (linguagemSelecionada == "javascript"){
        alert("ai sim meu chapa")
    }
})
