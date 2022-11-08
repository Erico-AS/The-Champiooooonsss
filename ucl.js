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
ucl()

function ucl() {
    for (var c = 0; c < 8; c++) {

        function sort(a) {
            function sorteio() {
                return Math.floor(Math.random() * (7 - 0 + 1) + 0)
            }
            
            var resultado = sorteio()
            
            if (a.indexOf(resultado) === -1 ){
                a.push(resultado)
            } else {
                sort(a)
            }
        }


        sort(lA)
        sort(lB)

        if(lA.length != lB.length) {
            if (lA.length < lB.length) {
                sort(lA)
            }
            else {
                sort(lB)
            }
        }


        var timeA = Object.entries(poteA)[lA[lA.length - 1]]
        var timeA_Pais =  timeA[1].pais
        var timeA_gp = timeA[1].gp


        
        var timeB = Object.entries(poteB)[lB[lB.length - 1]]
        var timeB_Pais = timeB[1].pais
        var timeB_gp = timeB[1].gp

        if (timeA_Pais === timeB_Pais || timeA_gp === timeB_gp) {    
            c = c - 1
            lA.pop()
            lB.pop()
        }        

        else {
            console.log(timeA[0] + ' x ' + timeB[0])
        }

    }
}
console.log('fim')
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