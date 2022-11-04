/*
    Sorteio do mata-mata da UCL,
    
    Cada primeiro lugar fica no pote A, cada segundo lugar fica no pote B,
    
    Cada time do Pote A enfrenta um time do Pote B, não podendo ser times:
    1-Mesmo país
    2-Mesmo grupo

    Passos:
    1-Pegar um item do poteA
    2- Pegar um item do poteB
    3- Verificar se tem países ou grupos iguais
    4- Juntar dois itens numa frase

*/

class n {

    constructor(min,max) {
        this.min = min
        this.max = max

        function numb(min, max) {
            var x = Math.floor(Math.random() * (max - min) + min)
            return x
        }
    }
}

const poteA = {
    /*A= Napoli, Porto, Bayern, Tottenham, Chelsea, Real Madrid, City, PSG*/
    Napoli: {
        pais: 'ITA',
        gp: 'A'
    },

    Porto: {
        pais: 'POR',
        gp: 'B'
    },

    Bayern: {
        pais: 'ALE',
        gp: 'C'
    },

    Tottenham: {
        pais: 'ING',
        gp: 'D'
    },

    Chelsea: {
        pais: 'ING',
        gp: 'E'
    },

    RealMadrid: {
        pais: 'ESP',
        gp:  'F'
    },

    City: {
        pais: 'ING',
        gp: 'G'
    },

    Benfica: {
        pais: 'POR',
        gp: 'H'
    }
}

const poteB= {
    /*B= Liverpool, Brugge, Inter, Eintracht, Milan, Leipzing, Borussia, Paris*/
    
    Liverpool: {
        pais: 'ING',
        gp: 'A'
    },

    Brugge : {
        pais: 'BEL',
        gp: 'B'
    },

    Inter : {
        pais: 'ITA',
        gp: 'C'
    },

    Eintracht : {
        pais: 'ALE',
        gp: 'D'
    },

    Milan : {
        pais: 'ITA',
        gp: 'E'
    },

    Leipzing : {
        pais: 'ALE',
        gp: 'F'
    },

    Borussia : {
        pais: 'ALE',
        gp: 'G'
    },

    Paris : {
        pais: 'FRA',
        gp: 'H'
    }
}

var lB = []
var lA = []
var c = 0


while (c < 8) {

    var x =  new n(0,8)
    console.log(x)

    if (lA.indexOf(x) === -1){
        lA.push(x) 
    } else {
        x = new n(0,8)
    }

    var y = new n(0,8)
    console.log(y)
    if (lB.indexOf(y) === -1){
        lB.push(y) 
    } else {
        y = new n(0,8)
    }

    console.log(lA)
    console.log(lB)

    var timeA = Object.entries(poteA)[lA[lA.length - 1]]
    var timeA_Pais =  timeA[1].pais
    var timeA_gp = timeA[1].gp

        

    var timeB = Object.entries(poteB)[lB[lB.length - 1]]
    var timeB_Pais = timeB[1].pais
    var timeB_gp = timeB[1].gp

    if (timeA_Pais === timeB_Pais || timeA_gp === timeB_gp) {    
        c--
        console.log('Reg \n' )
        lA.pop()
        lB.pop()
    }        

    else {
        console.log(timeA[0] + ' x ' + timeB[0])
        c++
    }

}

/*function duplicados(a) {
    function n() {
        return Math.floor(Math.random() * (8 - 0) + 0)
    }
    if (a.indexOf(n()) === -1) {
        a.push(n())
    } else {
        n()
    }
}

function duplicado(a) {
    function n() {
        return Math.floor(Math.random() * (8 - 0) + 0)
    }
    if (a.indexOf(n()) == -1) {
        a.push(n())
    } 
}*/