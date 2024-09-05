const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

function time() {
    let dataAtual = new Date()
    let hora = dataAtual.getHours().toString().padStart(2,"0")
    let minuto = dataAtual.getMinutes().toString().padStart(2,"0")
    let segundo = dataAtual.getSeconds().toString().padStart(2,"0")

    horas.textContent = hora
    minutos.textContent = minuto
    segundos.textContent = segundo
}

setInterval(time,1000)