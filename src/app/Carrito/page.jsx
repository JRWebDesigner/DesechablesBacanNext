
"use client";
import { useEffect   } from "react";
import { useCarrito } from "@/context/CarritoContext"; 
export default function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito  } = useCarrito();
  const handleEliminar = (id) => {
    eliminarDelCarrito(id);
  };
  const total=carrito.reduce((total, producto) => total + producto.price, 0)
  let messageP=''
  for(let i=0;i<carrito.length;i++){
    messageP+=' -'+carrito[i].name+"%0A"
  }
  const message='Buenas,%20desearia%20estos%20productos%0A'+messageP
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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul className="space-y-4 w-[90%] m-auto">
          {carrito.map((producto) => (
            <li key={producto.id} className="flex items-center justify-between border-b pb-4 duration-500 translate-y-14 mt-4">
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
              <button className="bg-red-400 p-1 rounded-full text-white" 
                onClick={() => handleEliminar(producto.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      {carrito.length > 0 && (
        <div className="flex flex-col justify-center items-center">
        <button
          onClick={vaciarCarrito}
          className="mt-6 bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-800 block m-auto"
        >
          Vaciar Carrito
        </button>
        <div className="flex items-center justify-center mt-10 gap-10">
        <h2 className="text-center text-xl font-semibold">
        Total: {total}
      </h2>
        <a href={`https://wa.me/+59163524798?text=${message}`}
              target='_blank' className="bg-green-500 p-2 text-white rounded-full">
          COMPRAR AHORA
        </a>
        </div>
        </div>
      )}
      
    </div>
  );
}
