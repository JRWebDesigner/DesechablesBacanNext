// 'use client'
// import { useState } from "react";
// import ProductoCard from "./ProductsCard";
// import Modal from "./Modal";
 
// export default function ProductByMarks({ productos , category }) {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setModalOpen(true);
//   };
//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedProduct(null);
//   };
//   const productosFiltrados = productos.filter((prod) => prod.categoryName.toUpperCase() === category.toUpperCase());
//   return (
//     <div>
//       <div className="flex flex-wrap justify-center items-center gap-8 m-10">
//         {productosFiltrados.length > 0 ? (
//           productosFiltrados.map((prod) => (
//             <ProductoCard key={prod._id} product={prod} openModal={openModal} />
//           ))
//         ) : (
//           <div className="text-center">No hay productos disponibles</div>
//         )}
//       </div>
//       {modalOpen && selectedProduct && (
//         <Modal product={selectedProduct} closeModal={closeModal} />
//       )}
//     </div>
//   );
// }
'use client'
import { useState } from "react";
import ProductoCard from "./ProductsCard";
import Modal from "./Modal";

export default function ProductByMarks({ productos, category }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filtrar productos por categoría
  const filterProductsByCategory = (productos, category) => {
    const categoryUpper = category?.toUpperCase();
    return Array.isArray(productos) ? productos.filter((prod) => 
      prod.categoryName?.toUpperCase() === categoryUpper
    ) : [];
  };

  // Abrir modal
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Cerrar modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  // Productos filtrados
  const productosFiltrados = filterProductsByCategory(productos, category);

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-8 m-10">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((prod) => (
            <ProductoCard key={prod._id} product={prod} openModal={handleOpenModal} />
          ))
        ) : (
          <div className="text-center text-gray-500 py-10">
            No se encontraron productos en la categoría "{category}".
          </div>
        )}
      </div>
      {modalOpen && (
        <Modal product={selectedProduct} closeModal={handleCloseModal} />
      )}
    </div>
  );
}