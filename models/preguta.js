export class Pregunta {
    /**
     * 
     * @param {string} pregunta 
     * @param {string} img 
     * @param {string[]} opciones 
     * @param {number} respuesta 
     */
    constructor(pregunta, img, opciones, respuesta) {
        this.pregunta = pregunta;
        this.img = img;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    /**
     * 
     * @returns {string}
     */
    pregunta() {
        return this.pregunta;
    }

    /**
     * 
     * @returns {string}
     */
    img() {
        return this.img;
    }

    /**
     * 
     * @returns {string[]}
     */
    opciones() {
        return this.opciones;
    }

    /**
     * 
     * @returns {number}
     */
    respuesta() {
        return this.respuesta;
    }
}