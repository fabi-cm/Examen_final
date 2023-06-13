export default class Palabras{
    constructor(){
        this.ConteoPalabras = []
    }
    darConteoDe(oracion){
        const palabra = oracion.split(" ")
        palabra.push(1)
        return palabra
    }
};
  