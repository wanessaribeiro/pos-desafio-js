
const videos = [
    {titulo: 'titulo do video', duracao: 720, scrIcone: '"teste.jpg"' },
    {titulo: 'titulo do video', duracao: 1420, scrIcone: '"teste.jpg"' }
]

//TODO: add restante
const diasSemana = {
    segunda: {minutos: null, label: 'Segunda', id: 'segundaResultado'},
    terca: {minutos: null, label: 'Terça', id: 'tercaResultado'},
}

function validaForm(event) {
    event.preventDefault()
    const tema = event.target.tema.value
    var x = document.forms["formDias"]['tema'].value;
    if (x == "") {
      alert("Campo 'Tema' deve estar preenchido");
      return false;
    }

    Object.keys(diasSemana).forEach(dia => {
        const valorValido = event.target[dia].value
        if (valorValido === '') {
            alert("Campo '" + diasSemana[dia].label + "' deve estar preenchido");
            return false;
          }
        diasSemana[dia].minutos = event.target[dia].value
    })
    formPronto(tema, diasSemana)
}

function formPronto(tema, diasSemana) {
    const tituloTema = document.createElement('h1')

    tituloTema.innerHTML = 'Exibindo vídeos do com o tema ' + tema
    document.getElementById("resultados").appendChild(tituloTema)

    Object.keys(diasSemana).forEach((dia) => {
        const divDia = document.getElementById(diasSemana[dia].id)
        const titulo = document.createElement('h2')

        titulo.innerHTML = diasSemana[dia].label + ': ' + diasSemana[dia].minutos + ' minutos'
        divDia.appendChild(titulo) 

        const segundosDia = Number(diasSemana[dia].minutos) * 60
        const videos = criaGrupoVideos(segundosDia)
        divDia.appendChild(videos) 
        document.getElementById("resultados").appendChild(divDia)

        
    })
    
}

function criaGrupoVideos(segundosDia) {
    let segundosTotais = 0
    const grupoVideos = document.createElement('div')
    grupoVideos.classList.add('grupoVideos')

    videos.forEach((item) => {
        segundosTotais = segundosTotais + item.duracao
        if(segundosTotais > segundosDia) return grupoVideos

        const divVideo = document.createElement('div')
        const tituloVideo = document.createElement('p')
        const imgVideo = document.createElement('img')
        //TODO: formatacao de segundos
        const duracaoMinutos = Number(item.duracao) / 60

        imgVideo.src = "teste.jpg";
        tituloVideo.innerHTML = item.titulo + ' - ' + duracaoMinutos + ' minutos'      

        divVideo.classList.add('video')
        divVideo.appendChild(imgVideo)
        divVideo.appendChild(tituloVideo)
        grupoVideos.appendChild(divVideo)
    })

    return grupoVideos
}

document.getElementById("formDias").addEventListener("submit", validaForm)