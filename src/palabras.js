export default class Palabras {
    constructor() {
        this.ConteoPalabras = []
    }
    darConteoDe(oracion) {
        const palabras = oracion.split(" ")
        const palabraMasConteo = []

        palabraMasConteo.push(palabras[0].toLowerCase())
        palabraMasConteo.push(1)

        return palabraMasConteo
    }

    conteoPalabras(oracion) {
        let listaPalabras
        const palabras = [] 
        palabras = oracion.split(" ")
        const palabraMasConteo = []
        const cont = 0
        while (cont < oracion.split(" ").length) {
            const sumador = 0
            palabraMasConteo.push(palabras[cont].toLowerCase())
            for (let i = 1; i < palabras.length; i++) {
                if (palabras[cont].toLowerCase() === palabras[i].toLowerCase()) {
                    sumador++;
                }
            }
            palabraMasConteo.push(sumador)
            listaPalabras.push(palabraMasConteo)
            cont++
        }
        return listaPalabras

    }
};
