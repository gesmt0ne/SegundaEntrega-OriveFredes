import { productos } from "./productos.js";
import { carrito } from "./carrito.js";

function calcularCostoTotal() {
    const cantidadDeProductos = parseInt(prompt("¿Cuantos productos deseas calcular?"));

    if (isNaN(cantidadDeProductos) || cantidadDeProductos <= 0) {
        alert("Por favor ingrese una cantidad válida de productos.");
        return;
    }

    for (let i = 0; i < cantidadDeProductos; i++) {
        const precioProducto = parseFloat(prompt(`Ingrese el precio del producto ${i + 1}`));

        if (isNaN(precioProducto) || precioProducto <= 0) {
            alert(`El precio ingresado para el producto ${i + 1} no es válido, inténtelo de nuevo.`); 
            return;
        }

        carrito.agregarProducto(i, precioProducto);
    }

    alert(`El costo total de los productos es: ${carrito.calcularTotal().toFixed(2)}`);
}

calcularCostoTotal();

