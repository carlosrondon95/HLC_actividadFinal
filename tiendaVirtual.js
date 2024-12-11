// Bloque de declaraciones
let carrito = [];
const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total');
const totalProductos = document.getElementById('total-productos');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const categorias = document.querySelectorAll('.categoria');
const productos = document.querySelectorAll('.producto');
const menuCategoriasBtn = document.getElementById('menu-categorias');
const categoriasDesplegable = document.getElementById('categorias-desplegable');

// Agregar productos al carrito
function agregarAlCarrito(producto, cantidad) {
    const totalProvisional = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0) + producto.precio * cantidad;
    if (totalProvisional > 1000) {
        mostrarAlerta('El total no puede superar los 1000€.');
        return;
    }

    const productoExistente = carrito.find(item => item.nombre === producto.nombre);
    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }

    mostrarAlerta(`${cantidad} x ${producto.nombre} añadido al carrito.`);
    actualizarCarrito();
}


// Actualizar carrito
function actualizarCarrito() {
    // Limpiar lista del carrito
    listaCarrito.innerHTML = '';

    let total = 0;
    let cantidadProductos = 0;

    // Agregar productos al carrito
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - ${item.cantidad} x ${item.precio}€`;
        listaCarrito.appendChild(li);

        total += item.precio * item.cantidad;
        cantidadProductos += item.cantidad;
    });

    // Actualizar total de productos y precio total
    totalCarrito.textContent = total.toFixed(2);
    totalProductos.textContent = `${cantidadProductos}`;
}

// Vaciar carrito
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Manejar la cantidad de productos a agregar
function manejarCantidad(event) {
    const productoDiv = event.target.closest('.producto');
    const nombreProducto = productoDiv.getAttribute('data-nombre');
    const precioProducto = parseFloat(productoDiv.getAttribute('data-precio'));
    const cantidad = parseInt(productoDiv.querySelector('input[type="number"]').value);

    agregarAlCarrito({ nombre: nombreProducto, precio: precioProducto }, cantidad);
}

// Filtrar productos por categoría
function filtrarPorCategoria(event) {
    const categoria = event.target.getAttribute('data-categoria');
    productos.forEach(producto => {
        if (producto.getAttribute('data-categoria') === categoria || categoria === 'all') {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

// Mostrar/ocultar el menú de categorías
function toggleMenuCategorias() {
    if (categoriasDesplegable.style.display === 'block') {
        categoriasDesplegable.style.display = 'none';
    } else {
        categoriasDesplegable.style.display = 'block';
    }
}

// Mostrar/ocultar carrito
function toggleCarrito() {
    const carritoDesplegable = document.getElementById('carrito-desplegable');
    if (carritoDesplegable.style.display === 'block') {
        carritoDesplegable.style.display = 'none';
    } else {
        carritoDesplegable.style.display = 'block';
    }
}

// Mostrar alertas
function mostrarAlerta(mensaje) {
    alert(mensaje); 
}

// Abrir/cerrar el carrito al hacer clic
const carritoHeader = document.getElementById('carrito-header');
carritoHeader.addEventListener('click', toggleCarrito);


// Agregar productos al carrito
document.querySelectorAll('.producto button').forEach(button => {
    button.addEventListener('click', manejarCantidad);
});

// Vaciar el carrito
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

// Filtrar productos por categoría
categorias.forEach(categoria => {
    categoria.addEventListener('click', filtrarPorCategoria);
});

// Mostrar/ocultar el menú de categorías
menuCategoriasBtn.addEventListener('click', toggleMenuCategorias);