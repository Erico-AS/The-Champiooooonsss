var s = []

function sorteio() {
    return Math.floor(Math.random() * (8 - 0 + 1) + 0)
}

while (s.length < 6) {
    var resultado = sorteio()

    if (s.indexOf(resultado) === -1 ){
        s.push(resultado)
    }
}

/* Tentativa de sorteio por array */
var a = [0, 1, 2, 3, 4, 5, 6, 7]
var i = []

function duplicados(i){
    
    
        var x = Math.floor(Math.random() * (8 - 0) + 0)
        if (i.indexOf(x) === -1) {
            i.push(x)
            console.log(i)
            console.log(i[i.length-1])
            
            delete a[i[i.length - 1]]

        }  else {
            x = ''
        } 
}

while (i.length < 8) {
    duplicados(i)
}