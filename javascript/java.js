var altura = 0
var largura = 0
var vidas = 1
var tempo = 100
var criaMosquitoTempo = 1500

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    
    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

function posicaoRandomica() {
    
    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosca')) {
        document.getElementById('mosca').remove()
        console.log(vidas);
        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
        document.getElementById('v' + vidas).src="img/coracao_vazio.png"

        vidas++
    }
}
    var posiçaoX = Math.floor(Math.random() * largura) - 90
    var posiçaoY = Math.floor(Math.random() * altura) - 90

    posiçaoX = posiçaoX < 0 ? 0 : posiçaoX
    posiçaoY = posiçaoY < 0 ? 0 : posiçaoY

    console.log(posiçaoX, posiçaoY)

        //criar elemento html
    var mosca = document.createElement('img')
    mosca.src = 'img/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posiçaoX + 'px'
    mosca.style.top = posiçaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosca)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosca1'

        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    
        }
    }
    
var nivel = window.location.search
   nivel = nivel.replace('?', '')
   
   if(nivel === 'Facil') {
       criaMosquitoTempo = 1500
       
   }else if(nivel === 'Normal'){
       criaMosquitoTempo = 1000
       
   }else if(nivel === 'Dificil'){
       criaMosquitoTempo = 750
   }
    
    
    
    
    




























