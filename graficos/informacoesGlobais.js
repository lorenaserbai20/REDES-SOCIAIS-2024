const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasNoMundo = (dados.total_pessoas_mundo) / 1e9
    const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round ((dados.tempo_medio-horas)*100)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${pessoasNoMundo} </span> Bilhões de Pessoas, e que aproximadamente <span> ${pessoasConectadas} </span> Bilhões estão conectadas em alguma Rede Social e passam em média <span> ${horas} </span> Horas e <span> ${minutos} </span> minutos conectadas.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarInformacoesGlobais()