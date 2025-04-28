class ProductoService {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    obtenerProductos() {
      return this.productos;
    }
  }
  
  module.exports = ProductoService;