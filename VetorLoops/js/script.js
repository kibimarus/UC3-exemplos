let tagContador = document.getElementById("contador")
let tagTitulo = document.getElementById("titulo")

let contador = 0

// ? Função que chamará o loop 
    function iniciarContadorWhile(){
        // ? Loop While -> Continua repetindo enquanto a condicional for verdadeira
        // ? Enquanto o contador for menor que 10 mil repita
        while (contador < 100000){
        // Aumentar contador
        contador++
        // tagContador.innerHTML = contador
        console.log(contador)

        }
    }

    function iniciarContadorFor(){
        // ? O loop 'for' do Javascript é BEEEM diferente do Python 
        // ? No corpo dele possui
        // ? 1- A criação de variavel contadora dele (aqui se chama 'i') 
        // ? 2- O limite do contador (Aqui é o 1 < 100)
        // ? 3- De quanto em quanto ele vai subindo (Aqui é o i ++)
        for(let i =0; i < 100; i++){
            console.log("Valor dw i: " + i)
        }
        
    }

    function contadorVetor(){
        // ? Vetor são variaveis como listas (com muitos valores dentro)
        let consoles = ["Atari 2600", "Nintendo", "Master System", "Intelevision", "Mega Drive", "Super Nintendo", "Wonderswan"]

        // ? Mostrando valor fr vetor. é por meio de indice
        // ? Os indices (posições) contam á partir do 0 
        console.log(" O 3° Console da Lista: " + consoles[2])

        console.log("Lista abaixo: ")
        // ? Mostrando a lista toda com o loop for
        for(let i=0; i<= 6; i++){
            console.log(consoles[i])
        }
    }

    function trocarClasse(){
        // ? Estamos manipulando a tag acessando suas classes com 'classList'
        // ? O toggle funciona como um interruptor de liga e desliga 
        // ? Se a tag Não tiver a classe 'trocado' ele adicionando ela
        // ? Se a tag Já tiver a classe ele RETIRA ela
        tagTitulo.classList.toggle("trocado")
    }