Capa de presentación (app.js) es la interfaz de usuarios,en este caso por consola, el cual muestra mensajes, lee datos, llama a los metodos del servicio, muestra los
resultados como una tabla logica de negocio services/productoService.js, valida y procesa, gestiona la lista de productos.
Capa de datos models/producto.js Representa la estructura del dato -Define que es un producto.

Ventajas respecto a la version monolitica: cada capa tiene su propio funcion por lo que el codigo es más ordenado, se puede modificar algunas capas sin afectar a las
demas, se pueden reutlizar componentes.
