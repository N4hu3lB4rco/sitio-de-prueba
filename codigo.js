// Práctica de DOM: lista de compras.
// Completar las consignas en orden.

// Consigna 1: buscar por su id los cuatro elementos de la página (producto, agregar, lista y contador).
const producto = document.getElementById("producto");
const agregar = document.getElementById("agregar");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

// Consigna 2: declarar la variable cantidad con el valor inicial 0.
let cantidad = 0;

// Consigna 3: escribir la función actualizarContador().
function actualizarContador() {
    contador.textContent = `Productos: ${cantidad}`;
}

// Consignas 4, 5 y 6: escuchar el clic del botón Agregar y crear los elementos.
agregar.addEventListener("click", function () {
    const nombreProducto = producto.value.trim();

    if (nombreProducto === "") {
        contador.textContent = "Escriba un producto.";
        return;
    }

    const elemento = document.createElement("li");
    elemento.textContent = nombreProducto;

    const quitar = document.createElement("button");
    quitar.type = "button";
    quitar.textContent = "Quitar";
    elemento.appendChild(quitar);
    lista.appendChild(elemento);

    cantidad += 1;
    producto.value = "";
    actualizarContador();

    quitar.addEventListener("click", function () {
        elemento.remove();
        cantidad -= 1;
        actualizarContador();
    });
});
