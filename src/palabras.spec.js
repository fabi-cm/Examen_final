import Palabras from "./palabras";

describe("Conteo de palabras", () => {
    it("de una palabra 'el' deberia devolver 'el'", () => {
        const palabras = new Palabras()
        expect(palabras.darConteoDe("el")).toEqual(["el",1]);
    });

});
