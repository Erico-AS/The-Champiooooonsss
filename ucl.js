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

    Paris: {
        pais: 'FRA',
        gp: 'H'
    }
}

const poteB= {
    /*B= Liverpool, Brugge, Inter, Eintracht, Milan, Leipzing, Borussia, Benfica*/
    
    Liverpool: {
        pais : 'ING',
        gp : 'A'
    },

    Brugge : {
        pais : 'BEL',
        gp : 'B'
    },

    Inter : {
        pais : 'ITA',
        gp : 'C'
    },

    Eintracht : {
        pais : 'ALE',
        gp : 'D'
    },

    Milan : {
        pais : 'ITA',
        gp : 'E'
    },

    Leipzing : {
        pais : 'ALE',
        gp : 'F'
    },

    Borussia : {
        pais : 'ALE',
        gp : 'G'
    },

    Benfica : {
        pais : 'POR',
        gp : 'H'
    }
}


for (c = 0; c < 8; c++){

    var Sa = []
    var Sb = []
    function sorteio() {
        return Math.floor(Math.random() * (8 - 0 + 1) + 0)
    }      

    while (Sa.length < 6) {
        var resultado = sorteio()

        if (Sa.indexOf(resultado) === resultado){
            Sa.push(resultado)
        }
    }

    while (Sb.length < 6) {
        var resultado = sorteio()

        if (Sb.indexOf(resultado) === resultado){
            Sb.push(resultado)
        }
    }

    var a = sorteio()
    var b = sorteio()


    var timeA = Object.entries(poteA)[a]
    var timeA_Pais =  Object.values(poteA)[a].pais
    var timeA_gp = Object.values(poteA)[a].gp
    var timeB = Object.entries(poteB)[b] 
    var timeB_Pais = Object.values(poteB)[b].pais

    var timeB_gp = Object.values(poteB)[b].gp


    if (timeA_Pais === timeB_Pais || timeA_gp === timeB_gp) {    
        c = c-1
    }        

    else {
        console.log(timeA[0] + ' x ' + timeB[0])
        timeA = ''
        timeB = ''       
    }

}