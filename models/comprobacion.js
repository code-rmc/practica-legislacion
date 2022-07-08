export class Comprobacion {
    constructor() {
        this.opcVerdaderas = [];
        this.contador = { v: 0, f: 0 };
    }

    /**
     * 
     * @param {number} opc 
     */
    agregar(opc) {
        this.opcVerdaderas.push(opc);
    }

    /**
     * 
     * @returns {number[]}
     */
    listarOpcV() {
        return this.opcVerdaderas;
    }

    /**
     * 
     * @param {number[]} opcChecked 
     */
    correccion(opcChecked) {
        this.contador.v = 0;
        this.contador.f = 0;
        opcChecked.forEach((valor, i) => {
            if (Number(valor) === this.opcVerdaderas[i]) {
                this.contador.v++;
            } else {
                this.contador.f++;
            }
        });
    }
}