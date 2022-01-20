var data = new Date()
var ano = document.querySelector('#ano')
var ano_att = data.getFullYear()
var txt = document.querySelector('#txt')

function persona() {  

    if (ano.value.lenght == 0 || Number(ano.value) > ano_att) {
        window.alert('Eita! Parece que temos um viajante do tempo entre nós. Tente denovo caso não o seja.')

    } 
    
    else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano_att - Number(ano.value)
        var nome = document.querySelector('#nome')
        var cover = document.getElementById('cover')
        var genero = ""

        
        
        if (sexo[0].checked) {
                if (idade >= 3 && idade < 12) {
                    txt.innerHTML = `<p> ${nome.value}, você é uma menina de ${idade} anos. </p>`
                    cover.style.backgroundImage = "url('imgs/young_lady.jpeg')"

                }
            
                else if (idade >= 12 && idade < 59) {
                    txt.innerHTML = `<p> ${nome.value}, você é uma adolescente de ${idade} anos.`
            
                }
            
                else if (idade >= 59 && idade < 110) {
                    txt.innerHTML = `<p> ${nome.value}, você é uma idosa de ${idade} anos.`
            
                }
            
                else if (idade >= 0 && idade < 3) {
                    txt.innerHTML = `Você é uma bebê de ${idade} ano(s), ${nome.value}.`
                }
            }
        }

        if (sexo[1].checked) {
            if (idade >= 3 && idade < 12) {
                txt.innerHTML = `<p> ${nome.value}, você é um menino de ${idade} anos </p>`
            }
        
            else if (idade >= 12 && idade < 59) {
                txt.innerHTML = `<p> ${nome.value}, você é um adolescente de ${idade} anos.`
        
            }
        
            else if (idade >= 59 && idade < 110) {
                txt.innerHTML = `<p> ${nome.value}, você é um idoso de ${idade} anos.`
        
            }
        
            else if (idade >= 0 && idade < 3) {
                txt.innerHTML = `Você é um bebê de ${idade} ano(s), ${nome.value}.`
            }
        }
}
