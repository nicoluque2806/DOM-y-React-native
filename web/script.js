
// Obtener los elementos del HTML
const contadorHTML = document.getElementById("contador");
const botonLike = document.getElementById("btnLike");
const historial = document.getElementById("historial");

// Variable para almacenar los Likes
let contador = 0;

// Escuchar los clics del botón
botonLike.addEventListener("click", function() {

    // Incrementar el contador
    contador++;

    // Actualizar el número en pantalla
    contadorHTML.textContent = contador;

    // Obtener la hora actual
    const ahora = new Date();

    const hora = ahora.toLocaleTimeString("es-CO", {
        hour12: false
    });

    // Crear una nueva fila
    const fila = document.createElement("tr");

    // Crear las celdas
    const numeroClic = document.createElement("td");
    const horaClic = document.createElement("td");

    // Asignar los valores
    numeroClic.textContent = contador;
    horaClic.textContent = hora;

    // Agregar las celdas a la fila
    fila.appendChild(numeroClic);
    fila.appendChild(horaClic);

    // Insertar la fila al inicio del historial
    historial.prepend(fila);

});
