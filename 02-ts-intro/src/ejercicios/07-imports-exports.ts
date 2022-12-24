import { Producto, calculaISV } from "./06-desestructuracion";


const CarritoCompras: Producto[] = [
  {
    desc: 'Telefono1',
    precio: 100
  },

  {
    desc: 'Telefono2',
    precio: 150
  },
];

const [total, isv] = calculaISV(CarritoCompras);

console.log(`Total: ${total}; ISV: ${isv}`);