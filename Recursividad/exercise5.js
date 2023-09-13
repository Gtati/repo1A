// Desarrollar en JavaScript los siguientes algoritmos que den solución a la problemática
// planteada.
// Implementar una clase en JavaScript, la cual tenga los siguientes atributos y métodos.
// Atributos:
// ● Código.
// ● Descripción.
// ● Precio de compra.
// ● Precio de venta.
// ● Cantidad en bodega.
// ● Cantidad mínima requerida en bodega.
// ● Cantidad máxima de inventario permitida.
// ● Porcentaje de Descuento.
// Métodos:
// ● Solicitar pedido: devuelva true si debe solicitar el producto al proveedor y false en
// caso contrario.
// ● Calcular total a pagar: devuelva la cantidad total a pagar al proveedor dado una
// cantidad de unidades de compra.
// Adicionalmente se desea dos subclases para los siguientes tipos de productos:
// ● Prendas de vestir (como lo son blusas, jeans, camisas, etc.) el cual debe tener los
// siguientes parámetros adicionales:
// ○ Talla: S, M, L, etc.
// ○ Permite planchado: verdadero o falso.
// ● Calzado (como lo son tenis, calzado formal, sandalias, etc.) el cual debe tener el
// siguiente parámetro adicional:
// ○ Talla: 35, 36, 37, etc.
// Diseñar un programa que:
// ● Consulte el número de productos de tipo de prendas de vestir a manejar.
// ● Consulte el número de productos de tipo calzado a manejar.
// ● Cree en una estructura de datos (arrays, map, set), los productos de prendas de
// vestir en el cual se guardarán las instancias de cada uno de ellos.
// ● Cree una estructura de datos (arrays, map, set) de productos de calzado en el cual
// se guardarán las instancias de cada uno de ellos.
class Producto {
    constructor(
      codigo,
      descripcion,
      precioCompra,
      precioVenta,
      cantidadBodega,
      cantidadMinimaBodega,
      cantidadMaximaInventario,
      porcentajeDescuento
    ) {
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.cantidadBodega = cantidadBodega;
      this.cantidadMinimaBodega = cantidadMinimaBodega;
      this.cantidadMaximaInventario = cantidadMaximaInventario;
      this.porcentajeDescuento = porcentajeDescuento;
    }
  
    solicitarPedido() {
    
      if (this.cantidadBodega < this.cantidadMinimaBodega) {
        return true;
      } else {
        return false;
      }
    }
  
    calcularTotalAPagar(cantidadUnidadesCompra) {
  
      const precioTotal = this.precioCompra * cantidadUnidadesCompra;
  

      if (this.porcentajeDescuento > 0) {
        precioTotal = precioTotal * (1 - this.porcentajeDescuento / 100);
      }
  
     
      return precioTotal;
    }
  }
  class PrendaDeVestir extends Producto {
    constructor(
      codigo,
      descripcion,
      precioCompra,
      precioVenta,
      cantidadBodega,
      cantidadMinimaBodega,
      cantidadMaximaInventario,
      porcentajeDescuento,
      talla,
      permitePlanchado
    ) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega,
        cantidadMinimaBodega, cantidadMaximaInventario, porcentajeDescuento);
  
      this.talla = talla;
      this.permitePlanchado = permitePlanchado;
    }
  }
  
  class Calzado extends Producto {
    constructor(
      codigo,
      descripcion,
      precioCompra,
      precioVenta,
      cantidadBodega,
      cantidadMinimaBodega,
      cantidadMaximaInventario,
      porcentajeDescuento,
      talla
    ) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega,
        cantidadMinimaBodega, cantidadMaximaInventario, porcentajeDescuento);
  
      this.talla = talla;
    }
  }
const cantidadProductosPrendasDeVestir = prompt("Ingrese el número de productos de tipo prendas de vestir: ");

const productosPrendasDeVestir = [];

for (let i = 0; i < cantidadProductosPrendasDeVestir; i++) {

  const productoPrendaDeVestir = new PrendaDeVestir(
    Math.random().toString(36).substring(7),
    "Prenda de vestir " + i)
    Math.random() * 100,
    Math.random() * 100,
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.random() * 100,
    Math.floor(Math)    }