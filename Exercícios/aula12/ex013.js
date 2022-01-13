var agora = new Date()
var dia = agora.getDay()

/* 
    0 = Domingo
    1 = Segunda-feira
    2 = Terça-feira
    3 = Quarta-feira
    4 = Quinta-feira
    5 = Sexta-feira
    6 = Sábado
*/

switch (dia) {
    case 0:
        console.log('Hoje é domingo, pé de cachimbo.')
        break
    
    case 1:
        console.log('Hoje é segunda. Preguiça Zzz.')
        break

    case 2:
        console.log('Hoje é terça. Ainda preguiça Zzz.')
        break

    case 3:
        console.log('Hoje é quarta. Até que enfim meiamos a semana!')
        break

    case 4:
        console.log('Hoje é quinta. Quase lá.')
        break

    case 5:
        console.log('Hoje até que enfim é sexta UHU!!!')
        break

    case 6:
        console.log('Hoje é sábadão. Só boa.')
        break

    default:
        console.log('Não sei que dia é hoje ;-;')
        break
}
