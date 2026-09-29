// ? Sintaxe de uma função
// ? nota1, nota2, nota 3 são 'parâmetros'
// ? parâmetros são infromações necessárias para a função funcionar
function calcularMedia(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3
    alert("A media é : " + media.toFixed(1))
}

let n1= Number(prompt("Digite nota 1: "))
let n2= Number(prompt("Digite nota 2: "))
let n3= Number(prompt("Digite nota 3: "))

// ? chamando a função !
calcularMedia(n1, n2, n3)
