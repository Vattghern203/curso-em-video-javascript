// Declarar um array.
// Não é necessário que todos os itens do array tenham o mesmo tipo. todos número ou strings e etc...

let num = ['Otávio', 21, 2001]

let amigo = { nome:'Otávio', sexo:'M', peso:60.0, engordar(p){
    this.peso += p
}} 

amigo.engordar(5)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)