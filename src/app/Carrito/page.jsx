"use client";
import { useState } from "react";
import { useCarrito } from "@/context/CarritoContext"; // Importa el hook

export default function Carrito() {
  const { carrito, eliminarDelCarrito } = useCarrito(); // Obtener carrito y la función de eliminar
  const [eliminar, setEliminar] = useState(true);

  const handleEliminar = (id) => {
    eliminarDelCarrito(id); // Llamar a la función de eliminación del contexto
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul className="space-y-4 w-[90%] m-auto">
          {carrito.map((producto) => (
            <li key={producto.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <img
                  src={producto.img}
                  alt={producto.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-xl font-bold">{producto.name}</h2>
                  <p className="text-gray-600">{producto.mark}</p>
                </div>
              </div>
              <p className="text-lg font-bold">{producto.price} Bs.</p>
              <button 
                onClick={() => handleEliminar(producto.id)} // Pasar el id del producto
                className={eliminar ? 'block' : 'hidden'}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2 className="text-center">
        Total: 
        <strong>
          {carrito.reduce((total, producto) => total + producto.price, 0)}
        </strong>
      </h2>
    </div>
  );
}
