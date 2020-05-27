let decimal

function converteEmBinario() {
    // Definição
    decimal = parseInt(document.getElementById("decimal").value)
    let lista = []

    // Divisão por 2
    while (decimal > 0) {
        lista.push(decimal % 2)
        decimal = parseInt(decimal / 2)
    }

    // Completar com 0s até ficar com 8 dígitos
    while (lista.length < 8) {
        lista.push(0)
    }

    lista.reverse()
    
    // Construindo o binario
    binario = lista.join("")

    // Resultado final
    resultadoEmBinario.innerHTML = binario

}

let binario

function converteEmDecimal(binario) {
    
    // Definição
    binario = (document.getElementById("binario").value).split('')

    // Transformar posições da array em number
    let i
    for (i = 0; i < binario.length; i++) {
        if (typeof binario[i] == "string") {
            binario[i] = parseInt(binario[i])
        }
    }
    
    // Completar com 0s até ficar com 8 dígitos
    while (binario.length < 8) {
        binario.unshift(0)
    }

    // Construindo o decimal
    let exponencial = 7
    decimal = 0
    for (i = 0; i < binario.length; i++) {
        decimal += binario[i]*(2**exponencial)
        exponencial--
    }

    // Resultado final
    resultadoEmDecimal.innerHTML = decimal
}
