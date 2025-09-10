const productos = [
  { id: 1, nombre: "Teclado", precio: 25000 },
  { id: 2, nombre: "Nonitor 27 pulgadas", precio: 100000 },
  { id: 3, nombre: "Hub multiconector", precio: 8990 },
  { id: 4, nombre: "Mouse", precio: 10000 },
  { id: 5, nombre: "Soporte de monitor", precio: 12590 },
  { id: 6, nombre: "MousePad", precio: 7000 },
  { id: 7, nombre: "Luces Led", precio: 6500 },
  { id: 8, nombre: "Audifonos Gamer", precio: 15000 },
  { id: 9, nombre: "Memoria RAM 16GB", precio: 150000 },
  { id: 10, nombre: "Gabinete", precio: 120000 }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const cartList = document.getElementById('cart-list');

function disminuirCantidad(id) {
    const item = carrito.find(i => i.id === id);
    if (item) {
      item.cantidad -= 1;
      if (item.cantidad <= 0) {
        carrito = carrito.filter(i => i.id !== id);
      }
      guardarCarrito();
      mostrarCarrito();
    }
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito();
    mostrarCarrito();
  }
  
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
  }

   function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function mostrarCarrito() {
    cartList.innerHTML = '';
  
    if (carrito.length === 0) {
      cartList.innerHTML = '<p>El carrito está vacío.</p>';
      return;
    }
  
    carrito.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <strong>${item.nombre}</strong><br>
        Precio: $${item.precio} x ${item.cantidad} = $${item.precio * item.cantidad}<br>
        <button onclick="agregarAlCarrito(${item.id})">+</button>
        <button onclick="disminuirCantidad(${item.id})">-</button>
        <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
      `;
      cartList.appendChild(div);
    });
  
    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    cartList.innerHTML += `<h3>Total: $${total}</h3>`;
  }
  mostrarCarrito()