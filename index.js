
function botaoPronto(event) {
    event.preventDefault()
    var diasSemana = {
        segunda : event.target.segunda.value,
        terca: event.target.terca.value,
        quarta: event.target.quarta.value
    }

    document.getElementById("resultados").innerHTML =  diasSemana.segunda
}

document.getElementById("tempoDias").addEventListener("submit", botaoPronto)