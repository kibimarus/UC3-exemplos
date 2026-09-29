// ? Pegando tags iniciais

const inputTask = document.getElementById("task")
const taskList = document.getElementById("task-list")
const btnAdd = document.getElementById("btnAdd")

function addTask(){
    // ? Checando se o nome da tarefa foi digitado
    if (inputTask.value == ""){
        alert("Você precisa escrever algo!")
    }
    else{
        // ! CRIANDO UM <li> AQUI NO JAVA SCRIPT
        // ? createElement = Criar TAG
        let li = document.createElement("li")
        li.innerHTML = inputTask.value

        // ? limpando o campo de texto
        inputTask.value = ""

        // ? Falta Posicionar onde esse <li> novo ficará
        // ? appendChild = Coloca a tag dentro do <ul>
        taskList.appendChild(li)
    }
}
btnAdd.addEventListener('click',addTask)
// ? Esse 'e' como parâmetro servirá para descobrirmos o que foi clicado
taskList.addEventListener('click', function (e){
    // ? checando se oque foi clicado foi o <li>
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
    }
}, false)