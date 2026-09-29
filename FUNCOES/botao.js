//& pegando a TAG do HTML
//& Aqui vamos descobrir a tag que será editada,e vamos salvar a Tag em uma variável
// & getElementById = "pegue o elemento por id "
let tagBtn = document.getElementById("botao")


// ? Essa função só será chamada quando o botão for clicado
function evento(){
    alert("Fui Clicado!")
    // ? editando a tag
    tagBtn.style.backgroundColor = " rgb(141, 190, 231)"
}