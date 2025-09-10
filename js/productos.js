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

const productList = document.getElementById('product-list');

function mostrarProductos() {
    productList.innerHTML = '';
    productos.forEach(producto => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <strong>${producto.nombre}</strong><br>
        Precio: $${producto.precio}<br>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
      `;
      productList.appendChild(div);
    });
  }

  function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const item = carrito.find(i => i.id === id);
  
    if (item) {
      item.cantidad += 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }
  
    guardarCarrito();
  }

  function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  mostrarProductos();