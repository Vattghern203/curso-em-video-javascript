function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('Erro! Verifique seus dados e tente novamente.')

    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Mulher'
            if (idade >= 3 && idade < 12) {
                img.setAttribute('src', 'young_lady.png')

            } else if (idade >= 12 && idade < 59) {
                img.setAttribute('src', 'teen_girl.png')

            } else if (idade >= 59 && idade < 110) {
                img.setAttribute('src', 'woman.png')

            } else if (idade >= 0 && idade < 3) {
                img.setAttribute('src', 'oldlady.png')
            }
        
        } else if (fsex[1].checked) {
            genero = 'Homem'
            if (idade >= 3 && idade < 12) {
                img.setAttribute('src', 'baby_boy.png')
            } else if (idade >= 12 && idade < 59) {
                //Crinça
                img.setAttribute('src', 'young_boy.png')

            } else if (idade >= 59 && idade < 110) {
                //Jovem
                img.setAttribute('src', 'teen_boy.png')
        
            } else if (idade >= 0 && idade < 3) {
                //Idoso
                img.setAttribute('src', 'oldman.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}