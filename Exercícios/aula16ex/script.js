let txtBoard = document.getElementById('text-board')
let submitBtn = document.querySelector('#submit-btn')
let inputNumber = document.getElementById('input-number')
let resultBtn = document.getElementById('result-btn')
let numberArray = []

function addNumber () {

    const option = document.createElement("option")

    if (inputNumber.value > 100 || inputNumber.value < 1) {

        window.alert("Os números não atendem aos requisitos. De 1 a 100.")

    } 
    else if (numberArray.includes(inputNumber.value)) { 

        window.alert(`O número ${inputNumber.value} já se encontra na lista. Tente outro número ou finalize a função.`)
    
    } else {

        console.log(`Número ${inputNumber.value} dentro do padrão`)

        option.text = `O número ${inputNumber.value} foi adicionado.`

        txtBoard.add(option)

        numberArray.push(inputNumber.value)

        console.log(numberArray)

        resultBtn.value = numberArray

        inputNumber.value = ''
        
        inputNumber.focus()
    }

    submitBtn.addEventListener("click", retornaResultado)
}

function retornaResultado() {

    if (numberArray.length == 0) {
        
        window.alert("Não há números para finalizar :p")

    } else {

        const container = document.querySelector('#container-right')

        let soma = 0

        numberArray.forEach(element => soma += parseInt(element));

        numberArray.sort()

        container.innerHTML = `A soma de todos os termos é igual a: ${soma}. <br>
                            A razão desse array é: ${Math.ceil(soma/numberArray.length)}. <br>
                            O maior termo é: ${numberArray[numberArray.length -1]}. <br>
                            O menor termo é: ${numberArray[0]}. <br>`

        }
}