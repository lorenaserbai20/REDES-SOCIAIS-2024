const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json' 

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados =  await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo ter ${dados.total_pessoas_mundos} de pesoas e que aproximadamente ${dados.total_pessoas_conectadas} etão conectadas em alguma rede social e passam em média ${dados.tempo.medio} horas conectadas.`
    console.log(dados);
}
visualizarInformacoesGlobais()
