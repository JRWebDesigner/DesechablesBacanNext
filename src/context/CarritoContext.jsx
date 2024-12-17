// CarritoContext.js
"use client";
import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const CarritoContext = createContext();

// Proveedor del contexto
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Función para añadir productos al carrito
  const añadirAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== id));
  };

  return (
    <CarritoContext.Provider value={{ carrito, añadirAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useCarrito = () => {
  return useContext(CarritoContext);
};
