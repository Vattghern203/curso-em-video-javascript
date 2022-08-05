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
    }

    submitBtn.addEventListener("click", retornaResultado)
}

function retornaResultado() {
    const container = document.querySelector('#container-right')

    const paragafo = document.createElement("p")

    numberArray.forEach(element => {
        const soma = element += element
        const razao = soma / Array.lenght
        const maior = Math.max(Array)
        const menor = Math.min(Array)
    });

    
}