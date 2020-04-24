let decimal = document.getElementById("decimal")
/*
let binario = document.getElementById("binario")
*/

function converteEmBinario() {
    
    // Definição
    decimal = parseInt(decimal.value)
    let binario
    let lista = []

    // Divisão por 2
    while (decimal > 0) {
        lista.push(decimal % 2)
        decimal = parseInt(decimal / 2)
    }
    
    // Construindo o binario
    binario = lista.join("")

    // Resultado final
    resultadoEmBinario.innerHTML = binario

}

function converteEmDecimal(binario) {
    alert("talkey")
}


/*
base10 = 100

function changeAds(base10):
    lista = []
    while base10 > 0:
        lista.append(base10%2)
        base10 = base10 // 2
    console.log(lista, "Lista")
    lista.reverse()
    console.log(lista, "Lista invertida")
    p = 0
    while p < len(lista):
        if lista[p] == 1:
            lista[p] = 0
        else:
            lista[p] = 1
        p +=1
    console.log(lista, "Lista reversa ")
    expo = len(lista) - 1
    console.log(expo)
    numeroSaida = 0
    for i in lista:
        numeroSaida += i*(2**expo)
        expo -= 1
    console.log(numeroSaida, "Resultado ")
    console.log("-----------------------")
    return numeroSaida

changeAds(base10)
*/