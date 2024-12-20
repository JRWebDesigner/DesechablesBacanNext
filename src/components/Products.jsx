
"use client";
import { useState } from "react";
import ProductoCard from "./ProductsCard";
import Modal from "./Modal";

export default function ProductosComp({ productos }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <h1 className="text-center uppercase font-bold text-3xl mt-10">
        Todos nuestros productos
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8 m-10">
        {productos.map((prod) => (
          <ProductoCard key={prod._id} product={prod} openModal={openModal} />
        ))}
      </div>
      {modalOpen && selectedProduct && (
        <Modal product={selectedProduct} closeModal={closeModal} />
      )}
    </>
  );
}
