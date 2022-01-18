function horario() {
    var agora = new Date
    var hora = agora.getHours()

    window.document.querySelector('body')
    window.document.getElementById('relogio').innerHTML = `<p>Agora são ${hora} horas</p>`

    hora = 15

    if (hora < 12) {
        window.document.querySelector('body').style.backgroundColor = "#ddc570"
        window.document.getElementById('cover').style.backgroundImage = "url('day.jpg')"

    }

    else if (hora < 18) {
        window.document.querySelector('body').style.backgroundColor = "#c47021"
        window.document.getElementById('cover').style.backgroundImage = "url('afternoon.jpg')"

    }

    else {
        window.document.querySelector('body').style.backgroundColor = "#2F2F5E"
        window.document.getElementById('cover').style.backgroundImage = "url('night.jpg')"
    }
}