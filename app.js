import { data } from './data/data.js';
import { Pregunta } from './models/preguta.js';
import { Comprobacion } from './models/comprobacion.js';
import { UI } from './models/ui.js';

const formulario = document.getElementById("formulario");

const comprobacion = new Comprobacion();
const ui = new UI();

const main = () => {
    data.forEach(datos => {
        const preg = new Pregunta(datos.pregunta, datos.img, datos.opciones, datos.respuesta);
        comprobacion.agregar(preg.respuesta);
        ui.mostrarPreguntas(preg.pregunta, preg.img, preg.opciones);
    });
    formulario.innerHTML += `<button id="enviar" type="submit" class="btn btn-outline-success my-5" style="width:200px" onclick="toasty()">Enviar</button>`;
}

main();

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const dataForm = new FormData(formulario);

    //const respuestas = comprobacion.listarOpcV().map((_, i) => dataForm.get(`pregunta${i + 1}`));
    let respuestas = [];

    for (let index = 0; index < comprobacion.listarOpcV().length; index++) {
        respuestas.push(dataForm.get(`pregunta${index + 1}`));
    }

    // Comprueba la cantidad de respuestas correctas e incorrecta
    comprobacion.correccion(respuestas);

    // Agrega icono a la respuesta
    comprobacion.listarOpcV().forEach((opc, i) => {
        if (respuestas[i] != opc && respuestas[i] != null) {
            // icono de respuesta incorrecta
            ui.icono(i, respuestas[i], true);
        }
        // Icono de respuesta correcta
        ui.icono(i, opc, false);
    });

    ui.notificacion(comprobacion.contador.v, comprobacion.contador.f);
});
