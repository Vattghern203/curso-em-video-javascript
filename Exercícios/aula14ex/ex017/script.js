function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tabua')
    
    if (num.value.length == 0) {
        window.alert('Por favor, verifique o número digitado!')
    }

    else {
        let n = Number(num.value)
        let cont = 1
        tab.innerHTML = ''

        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n * cont}`
            tab.appendChild(item)
            item.value = `tab${cont}`

            cont++
        }
    }
}  