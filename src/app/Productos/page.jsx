"use client"
import { useEffect, useState } from 'react'
import products from './products.json'
export default function Productos() {
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
  useEffect(() => {
    const translates = document.querySelectorAll('.translate-y-14');
    const scales = document.querySelectorAll('.scale-50');
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const Atranslate = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('translate-y-14');
          entry.target.classList.remove('opacity-35');
        }
      });
    };

    const Ascale = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('scale-50');
          entry.target.classList.remove('-translate-x-[30%]');
        }
      });
    };

    const Ascaleof = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('scale-50');
        }
      });
    };

    const observer = new IntersectionObserver(Atranslate, options);
    const observerS = new IntersectionObserver(Ascale, options);
    const observerSo = new IntersectionObserver(Ascaleof, options);

    translates.forEach((translate) => observer.observe(translate));
    scales.forEach((scale) => {
      observerS.observe(scale);
      observerSo.observe(scale);
    });

    return () => {
      observer.disconnect();
      observerS.disconnect();
      observerSo.disconnect();
    };
  }, []);
  return (
        <>
			<h1 className="text-center uppercase font-bold text-3xl mt-10">
        Todos nuestros productos
      </h1>
      <div className="flex flex-row-reverse flex-wrap justify-center items-center gap-16 m-10">
        {products.map((prod) => (
          <div
            key={prod.id}
            onClick={() => openModal(prod)}
            className="flex flex-col justify-center items-center shadow-xl w-[240px] p-4 text-xl font-bold gap-3 rounded-3xl hover:scale-[1.05] hover:bg-gray-100 duration-500 translate-y-14 scale-50 cursor-pointer"
          >
            <img src={prod.img} alt={prod.name} />
            <span>{prod.name}</span>
            <small className="text-black uppercase">{prod.mark}</small>
            <div className="flex justify-around items-center">
              <small>{prod.price}Bs.</small>
              <button className="bg-blue-400 p-4"> 
                Añadir
              </button>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap justify-center items-center gap-7">
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              className="w-[300px] md:w-[400px] h-auto rounded"
            />
            <div className='w-[90%] max-w-[500px] min-w-[300px] flex justify-center items-center flex-col'>
            <h2 className="text-2xl font-bold mt-4">{selectedProduct.name}</h2>
            <small className="text-gray-700 mt-2 uppercase">{selectedProduct.mark}</small>
            <div>
              <h3>Descripción</h3>
              <p>
              {selectedProduct.descrip}
              </p>
            </div>
            <div className="mt-4 flex justify-around gap-10">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Cerrar
              </button>
              <a
              href={`https://wa.me/+59163524798?text=Hola!%20Estoy%20interesado%20en%20${selectedProduct.name}%20,marca%20${selectedProduct.mark}`}
              target='_blank'
                onClick={closeModal}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Comprar
              </a>
            </div>
            </div>
          </div>
        </div>
      )}
        </>
    )
}