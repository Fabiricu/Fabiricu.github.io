/* // script.js

const producto = [
    { nombre: 'Producto 1', precio: 20.00 },
    { nombre: 'Producto 2', precio: 30.00 },
    { nombre: 'Producto 3', precio: 25.00 },
    { nombre: 'Producto 4', precio: 40.00 }
];

const carrito = [];

function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');

    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        listaCarrito.appendChild(listItem);
        total += producto.precio;
    });

    totalCarrito.textContent = total.toFixed(2);
}
 */