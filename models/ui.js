export class UI {
    constructor() {
        this.indice = 1;
    }

    /**
     * Agrega las preguntas al formulario
     * @param {string} titulo 
     * @param {string} img
     * @param {string[]} opciones 
     */
    mostrarPreguntas(titulo, img, opciones) {
        const main = document.getElementById("formulario");
        // CONTENEDOR
        const contenedor = document.createElement("div");
        contenedor.className = 'mt-5';
        // PREGUNTA
        const pregunta = document.createElement("p");
        pregunta.className = 'fw-bold';
        pregunta.textContent = this.indice + ") " + titulo;
        contenedor.appendChild(pregunta);

        // IMAGEN
        if (img) {
            const figure = document.createElement("figure");
            const imagen = document.createElement("img");
            imagen.setAttribute('src', img);
            imagen.style.width = "500px";
            figure.appendChild(imagen);
            contenedor.appendChild(figure);
        }

        // OPCIONES DE RESPUESTA
        opciones.forEach((opc, i) => {
            const contOpcion = document.createElement("div");
            contOpcion.className = 'form-check';

            const span = document.createElement("span");
            span.className = `pregunta${this.indice}Opcion` + (i + 1);

            const input = document.createElement("input");
            input.className = 'form-check-input';
            input.setAttribute('type', 'radio');
            input.setAttribute('name', `pregunta${this.indice}`);
            input.setAttribute('value', (i + 1));

            const label = document.createElement("label");
            label.className = 'form-check-label';
            label.textContent = opc;
            contOpcion.appendChild(span);
            contOpcion.appendChild(input);
            contOpcion.appendChild(label);
            contenedor.appendChild(contOpcion);
        });
        this.sumIndice();
        main.appendChild(contenedor);
    }

    sumIndice() {
        this.indice += 1;
    }

    /**
     * Notificacion - Cantidad de respuestas correctas e incorrecta
     * @param {number} resVerdaderas 
     * @param {number} resFalsas 
     */
    notificacion(resVerdaderas, resFalsas) {
        const toastBody = document.querySelector(".toast-body");
        const fragment = document.createDocumentFragment();
        const totalRespuesta = document.createElement("p");
        totalRespuesta.classList.add("notificacion");
        totalRespuesta.innerHTML = `<span class="badge bg-success"><i class="fas fa-check"></i></span> Verdaderas: ${resVerdaderas}</br> <span class="badge bg-danger"><i class="fas fa-times"></i></span> Flasos: ${resFalsas}`;
        fragment.appendChild(totalRespuesta);
        toastBody.innerHTML = "";
        toastBody.appendChild(fragment);
    }

    /**
     * Icono de respuesta correcta o incorrecta
     * @param {number} i 
     * @param {number} opc 
     * @param {boolean} condicion 
     */
    icono(i, opc, condicion) {
        const resSelec = document.querySelector(`.pregunta${i + 1}Opcion` + opc);
        if (condicion) {
            resSelec.classList.add("badge", "bg-danger");
            resSelec.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            resSelec.classList.add("badge", "bg-success");
            resSelec.innerHTML = '<i class="fas fa-check"></i>';
        }
    }
}
