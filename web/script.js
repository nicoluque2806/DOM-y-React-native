
// Obtener los elementos del HTML
const contadorHTML = document.getElementById("contador");
const botonLike = document.getElementById("btnLike");
const botonRestar = document.getElementById("btnRestar");
const botonReiniciar = document.getElementById("btnReiniciar");
const historial = document.getElementById("historial");

// Variable para almacenar los Likes
let contador = 0;

// Función para actualizar el contador
function actualizarContador() {
    contadorHTML.textContent = contador;

    if (contador > 10) {
        contadorHTML.classList.add("superado");
    } else {
        contadorHTML.classList.remove("superado");
    }
}

// Dar Like
botonLike.addEventListener("click", function() {

    contador++;
    actualizarContador();

    // Obtener la hora actual
    const ahora = new Date();

    const hora = ahora.toLocaleTimeString("es-CO", {
        hour12: false
    });

    // Crear una nueva fila
    const fila = document.createElement("tr");

    const numeroClic = document.createElement("td");
    const horaClic = document.createElement("td");

    numeroClic.textContent = contador;
    horaClic.textContent = hora;

    fila.appendChild(numeroClic);
    fila.appendChild(horaClic);

    historial.prepend(fila);

});

// Restar un Like
botonRestar.addEventListener("click", function() {

    if (contador > 0) {
        contador--;
        actualizarContador();

        // Eliminar el registro del último Like
        if (historial.firstElementChild) {
            historial.removeChild(historial.firstElementChild);
        }
    }

});

// Reiniciar el contador
botonReiniciar.addEventListener("click", function() {

    contador = 0;
    actualizarContador();
    historial.innerHTML = "";

});
