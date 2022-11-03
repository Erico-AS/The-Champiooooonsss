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