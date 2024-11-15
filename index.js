
const videos = [
    {titulo: 'titulo do video', duracao: 720, scrIcone: '"teste.jpg"' },
    {titulo: 'titulo do video', duracao: 1420, scrIcone: '"teste.jpg"' }
]

function botaoPronto(event) {
    event.preventDefault()
    const diasSemana = [
        {minutos : event.target.segunda.value, dia: 'Segunda', id:'segundaResultado'}, 
        {minutos: event.target.terca.value, dia: 'Terça', id:'tercaResultado'},
        {minutos: event.target.quarta.value, dia: 'Quarta', id:'quartaResultado'}
    ]

    diasSemana.forEach((item) => {
        const dia = document.getElementById(item.id)
        const titulo = document.createElement('h2')

        titulo.innerHTML = item.dia + ': ' + item.minutos + ' minutos'
        dia.appendChild(titulo) 

        const segundosDia = Number(item.minutos) * 60
        const videos = criaGrupoVideos(segundosDia)
        dia.appendChild(videos) 
        document.getElementById("resultados").appendChild(dia)

        
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

document.getElementById("tempoDias").addEventListener("submit", botaoPronto)