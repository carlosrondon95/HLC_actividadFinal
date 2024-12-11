# Actividad Final JavaScript - Tienda Virtual Interactiva

## Descripción

Esta aplicación es una tienda virtual interactiva desarrollada en **HTML**, **CSS** y **JavaScript**. Ofrece una experiencia de compra sencilla y funcional basada en productos para usuarios interesados en discos de vinilo y equipamiento para DJs.

### Funcionalidades principales:

1. **Catálogo interactivo**:
   - Productos organizados por categorías.
     
2. **Carrito de compras**:
   - Añadir o eliminar productos al carrito.
   - Visualización dinámica del carrito.
     
3. **Interfaz amigable**:
   - Diseño adaptable a dispositivos móviles y de escritorio.
   - Navegación sencilla con botones interactivos.
     
4. **Restricciones**:
   - Manejo de límite de compra: el total del carrito no puede superar los 1000€.
   - Alertas para notificar acciones.

## Archivos incluidos

- **index.html**: Archivo HTML que contiene la estructura principal de la tienda.
- **estilos.css**: Archivo CSS que define el estilo visual de la tienda.
- **tiendaVirtual.js**: Archivo con el código funcional para la tienda.

## Requisitos

- **Navegador web**: Este proyecto se ejecuta directamente en un navegador con soporte para JavaScript.

## Instrucciones de Ejecución

1. **Descargar los archivos**  
   Asegúrate de tener los archivos `index.html`, `estilos.css`, `tiendaVirtual.js` y la carpeta `images` en el mismo directorio.

2. **Abrir el archivo HTML**  
   Haz doble clic en el archivo `index.html` para abrirlo en tu navegador.

3. **Explorar la tienda**  
   - Navega entre las categorías de productos.
   - Añade productos al carrito.
   - Revisa el total del carrito.

## Estructura del Código

### **HTML**
- Define la estructura principal de la tienda, incluyendo el catálogo de productos y el carrito de compras.

### **CSS**
- Proporciona el diseño visual de la tienda: colores, fuentes y disposición.


### **JavaScript**
- **Funciones principales**:
  - `agregarAlCarrito(producto, cantidad)`: Añade productos al carrito y actualiza el total.
  - `actualizarCarrito()`: Gestiona la visualización dinámica de los productos en el carrito.
  - `vaciarCarrito()`: Limpia el carrito de compras.
  - `filtrarPorCategoria(categoria)`: Filtra productos según la categoría seleccionada.
  - `mostrarAlerta(mensaje)`: Muestra notificaciones al usuario.
  - 
- **Interactividad**:
  - Soporte para clics en botones y selección de categorías.

## Notas adicionales

- **Errores manejados**:
  - Evita que el total del carrito supere 1000€ con notificaciones claras.
  - Manejo dinámico de cantidades y productos.

- **Diseño optimizado**:
  - Navegación clara entre categorías.
  - Interacción intuitiva.

## Ejemplo de uso

1. Haz clic en una categoría para filtrar productos.
2. Selecciona un producto y ajusta la cantidad deseada antes de añadirlo al carrito.
3. Consulta el carrito para revisar el total y los productos seleccionados.
4. Vacía el carrito si deseas empezar de nuevo.

---
*Desarrollado por Carlos Rondón Pérez.*
