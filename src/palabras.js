export default class Palabras{
    constructor(){
        this.ConteoPalabras = []
    }
    darConteoDe(oracion){
        const palabras = oracion.split(" ")
        const palabraMasConteo = []
        palabraMasConteo.push(palabras[0].toLowerCase())
        palabraMasConteo.push(1)
        return palabraMasConteo
    }
};
  