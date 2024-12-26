
// "use client";
// import { useEffect, useState } from "react";
// import { getProducts } from "../../sanity/sanity-utils";
// import { useCarrito } from "../../context/CarritoContext";


// export default async function Productos() {
//   const productos= await getProducts()
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const { añadirAlCarrito } = useCarrito();
//   const aniadido = () => {
//     alert("Agregado correctamente");
//     setModalOpen(false);
//   };

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedProduct(null);
//   };

//   useEffect(() => {
//     const translates = document.querySelectorAll(".translate-y-14");
//     const scales = document.querySelectorAll(".scale-50");

//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5,
//     };

//     const Atranslate = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.remove("translate-y-14");
//           entry.target.classList.remove("opacity-35");
//         }
//       });
//     };

//     const Ascale = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.remove("scale-50");
//           entry.target.classList.remove("-translate-x-[30%]");
//         }
//       });
//     };

//     const observer = new IntersectionObserver(Atranslate, options);
//     const observerS = new IntersectionObserver(Ascale, options);

//     translates.forEach((translate) => observer.observe(translate));
//     scales.forEach((scale) => observerS.observe(scale));

//     return () => {
//       observer.disconnect();
//       observerS.disconnect();
//     };
//   }, []);
//   return (
//     <>
//       <h1 className="text-center uppercase font-bold text-3xl mt-10">
//         Todos nuestros productos
//       </h1>
//       <div className="flex flex-row-reverse flex-wrap justify-center items-center gap-16 m-10">
//         {productos.map((prod) => (
//           <div
//             key={prod._id}
//             onClick={() => openModal(prod)}
//             className="flex flex-col justify-center items-center shadow-xl w-[240px] p-4 text-xl font-bold gap-3 rounded-3xl hover:scale-[1.05] hover:bg-gray-100 duration-500 translate-y-14 scale-50 cursor-pointer"
//           >
//             <img src={prod.imageUrl} alt={prod.altText} />
//             <div className="flex justify-around items-center gap-4">
//               <span>{prod.name}</span>
//               <small>{prod.price} Bs.</small>
//             </div>
//             <small className="text-black uppercase">{prod.mark}</small>
//           </div>
//         ))}
//       </div>
//       {modalOpen && selectedProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
//           <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-wrap justify-center items-center gap-7">
//             <button
//               onClick={closeModal}
//               className="bg-gray-200 top-2 right-2 text-2xl px-4 py-2 rounded-full hover:bg-red-600 absolute hover:text-white"
//             >
//               X
//             </button>
//             <img
//               src={selectedProduct.imageUrl}
//               alt={selectedProduct.altText}
//               className="w-[300px] md:w-[400px] h-auto rounded"
//             />
//             <div className="w-[90%] max-w-[500px] min-w-[300px] flex justify-center items-center flex-col">
//               <h2 className="text-2xl font-bold mt-4">
//                 {selectedProduct.name} ----- {selectedProduct.price} Bs.
//               </h2>
//               <small className="text-gray-700 mt-2 uppercase">
//                 {selectedProduct.mark}
//               </small>
//               <div>
//                 <h3>Descripción</h3>
//                 <p>{selectedProduct.description}</p>
//               </div>
//               <div className="mt-4 flex justify-around gap-10">
//                 <button
//                   onClick={() => {
//                     añadirAlCarrito(selectedProduct);
//                     aniadido();
//                   }}
//                   className="flex justify-center items-center bg-blue-600 px-4 py-2 text-sm rounded-full hover:scale-105 text-white"
//                 >
//                   Añadir
//                 </button>
//                 <a
//                   href={`https://wa.me/+59163524798?text=Hola!%20Estoy%20interesado%20en%20${selectedProduct.name}%20,marca%20${selectedProduct.mark}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex justify-center items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
//                 >
//                   Comprar
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
import { productsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import ProductosComp from "@/components/Products";
import { SanityDocument } from "next-sanity";

export default async function productos() {
  try {
    const productos = await sanityFetch<SanityDocument[]>({ query: productsQuery });
    return (
      <div>
    {productos && productos.length > 0 ? (
      <div>
        <ProductosComp productos={productos} />
      </div>
    ) : (
      <div>
        <p>No hay productos</p>
      </div>
    )}
  </div>
    );
  } catch (error) {
    console.error("Error in productos function:", error);
    return (
      <div>
        <p>Error fetching products</p>
      </div>
    );
  }
}