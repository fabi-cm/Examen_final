import Palabras from "./palabras";

describe("Conteo de palabras", () => {
    it("de una palabra 'el' deberia devolver 'el'", () => {
        const palabras = new Palabras()
        expect(palabras.darConteoDe("el")).toEqual(["el",1]);
    });

    it("de una palabra mayuscula o minuscula 'El' deberia devolver 'el,1' ", () => {
        const palabras = new Palabras()
        expect(palabras.darConteoDe("El")).toEqual(["el",1]);
    });

    it("de una oracion 'El esta el' deberia devolver '[[el,2],[esta,1]]' ", () => {
        const palabras = new Palabras()
        expect(palabras.conteoPalabras("El esta el")).toEqual([["el",2],["esta",1]]);
    });

});
