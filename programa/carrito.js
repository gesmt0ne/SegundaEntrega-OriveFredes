import { productos } from "./productos.js";

const carrito = {
    items: [],

    agregarProducto: function (id, cantidad) {
        const producto = productos.find(item => item.id === id);

        if(!producto) {
            alert ("El producto no existe.");
            return;
        }

        if (producto.stock >= cantidad) {
            const carritoItem = {
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad
            };
            this.items.push(carritoItem);
            producto.stock -= cantidad;
            alert(`${cantidad} ${producto.nombre}(s) agregado(s) al carrito.`);
        } else {
            alert("No hay suficiente stock para este producto.");
        }
    },
    
    calcularTotal: function () {
        let total = 0;
        for (const item of this.items) {
            total += item.precio * item.cantidad;
        }
        return total;
    }
}

export {carrito};

// En este programa utilice metodos de busqueda, y de push, utilice variables y funciones. Todo el codigo
// esta en una carpeta llamada programa.