
function calc() {
    var começo = document.getElementById('start')
    var fim = document.getElementById('end')
    var salto = document.getElementById('jump')
    var res = document.getElementById('res')

    if (começo.value.length == 0 || fim.value.length == 0 || salto.value.length == 0) {
        window.alert('[ERRO 69]. Faltam-lhe dados! Tente novamente. (o･ω･o)')
        res.innerHTML = 'Não para calcular isso... (・`ω´・)'

    } else {

        res.innerHTML = 'Calculando... <br>'
        let i = Number(começo.value)
        let f = Number(fim.value)
        let s = Number(salto.value)

        if (s <= 0) {
            window.alert('Salto ZERO. Impossível... Considerando como 1.')
            s = 1
        }

        if (f > i) {

            for(let c = i; c <= f; c += s) {
                res.innerHTML += `${c} \u{1F449}`
            }
    
        } else {

            for(let c = i; c >= f; c -= s) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }  
        res.innerHTML += `\u{1F3C1}` 
    }
}