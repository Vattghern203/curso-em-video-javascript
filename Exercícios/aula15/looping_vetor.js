var v = [4, 7, 1, 0, 3, 2, 9, 8, 6, 5]


v.sort()

/*

for(var i = 0; i < 10; i++) {
    console.log(`Vetor de número ${i} e seu valor é de: ${v[i]}`)
}

for(var k in v) {
    console.log(v[k])
}

let pos = v.indexOf(1)

if (pos == -1) {
    console.log('Valor não encontrado.')
}

else {
    console.log(`O vetor buscado se encontra na posição: ${pos}`)
}

*/

for(let pos in v) {
    console.log(`A posição ${pos} tem o valor ${v[pos]}`)
}