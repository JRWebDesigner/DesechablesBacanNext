'use client'
import { useState } from "react";
import ProductoCard from "./ProductsCard";
import Modal from "./Modal";
 
export default function ProductByMarks({ productos = [], marca }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log(marca)
  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };
  const productosFiltrados = productos.filter((prod) => prod.category.toUpperCase() === marca.toUpperCase());
  console.log(productos)
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-8 m-10">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((prod) => (
            <ProductoCard key={prod._id} product={prod} openModal={openModal} />
          ))
        ) : (
          <div className="text-center">No hay productos disponibles</div>
        )}
      </div>
      {modalOpen && selectedProduct && (
        <Modal product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
}