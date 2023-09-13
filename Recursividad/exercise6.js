// Una subasta o remate es una venta organizada basado en la competencia directa, y
// generalmente pública, es decir, a aquel comprador que pague la mayor cantidad de
// dinero o de bienes a cambio del producto.
// Hacer en JavaScript una simulación de subasta que cumpla con las siguientes
// características:
// 1. Se podrá registrar los productos a subastar almacenados (id del producto, nombre
// del producto, fecha y precio inicial de subasta).
// 2. Cada persona puede pujar por el producto que desea, indicando la fecha, el
// producto y el valor ofrecido.
// 3. Se puede ver la lista de productos registrados.
// 4. La lista de ofertas por producto.
// 5. Seleccionar una oferta ganadora.
// Definimos los atributos de los productos a subastar
const ATRIBUTOS_PRODUCTO = ["id", "nombre", "fecha", "precio_inicial"];

const ATRIBUTOS_OFERTA = ["fecha", "producto", "valor"];


class Producto {
  constructor(...atributos) {
    this.id = atributos[0];
    this.nombre = atributos[1];
    this.fecha = atributos[2];
    this.precio_inicial = atributos[3];
  }
}


class Oferta {
  constructor(...atributos) {
    this.fecha = atributos[0];
    this.producto = atributos[1];
    this.valor = atributos[2];
  }
}

function registrarProducto(producto) {
 
  if (producto.length !== ATRIBUTOS_PRODUCTO.length) {
    throw new Error("El producto debe tener los siguientes atributos: " + ATRIBUTOS_PRODUCTO.join(", "));
  }

  productos.push(new Producto(...producto));
}

function realizarOferta(oferta) {

  if (oferta.length !== ATRIBUTOS_OFERTA.length) {
    throw new Error("La oferta debe tener los siguientes atributos: " + ATRIBUTOS_OFERTA.join(", "));
  }

  const producto = productos.find((p) => p.id === oferta[1]);
  if (!producto) {
    throw new Error("El producto no existe");
  }

  const ofertas = ofertasPorProducto(producto.id);
  if (ofertas.length > 0 && ofertas[0].valor >= oferta[2]) {
    throw new Error("La oferta debe ser mayor que la oferta anterior");
  }


  ofertas.push(new Oferta(...oferta));
}


function verListaProductos() {

  console.log("Lista de productos registrados:");
  for (const producto of productos) {
    console.log("- ID: " + producto.id + ", Nombre: " + producto.nombre + ", Fecha: " + producto.fecha + ", Precio inicial: " + producto.precio_inicial);
  }
}

function verListaOfertasPorProducto(idProducto) {

  const producto = productos.find((p) => p.id === idProducto);
  if (!producto) {
    throw new Error("El producto no existe");
  }

  console.log("Lista de ofertas por producto:");
  for (const oferta of ofertasPorProducto(idProducto)) {
    console.log("- Fecha: " + oferta.fecha + ", Producto: " + oferta.producto + ", Valor: " + oferta.valor);
  }
}


function seleccionarOfertaGanadora(idProducto) {
  
  const producto = productos.find((p) => p.id === idProducto);
  if (!producto) {
    throw new Error("El producto no existe");
  }

 
  const ofertaGanadora = ofertasPorProducto(idProducto)[0];


  console.log("Oferta ganadora:");
  console.log("- Fecha: " + ofertaGanadora.fecha + ", Producto: " + ofertaGanadora.product)
}