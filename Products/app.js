const readline = require("readline-sync");
 const Producto = require("./models/producto");
 const ProductoService = require("./services/productoService");
 
 const servicio = new ProductoService();
 
 while (true) {
   const nombre = readline.question("Nombre del producto (o 'salir'): ");
   if (nombre.toLowerCase() === "salir") break;
 
   const precio = parseFloat(readline.question("Precio: "));
 
   const producto = new Producto(nombre, precio);
   servicio.agregarProducto(producto);
 
   console.log("\nProductos ingresados:");
   console.log("---------------------------------------------");
   console.log("Nombre\t\tPrecio");
   console.log("---------------------------------------------");
 
   servicio.obtenerProductos().forEach(p => {
     console.log(
       `${p.nombre}\t\t${p.precio}`
     );
   });
 
   console.log("---------------------------------------------\n");
 }