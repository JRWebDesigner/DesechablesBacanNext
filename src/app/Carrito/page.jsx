
"use client";
import Link from "next/link";
import { useEffect   } from "react";
import { useCarrito } from "../../context/CarritoContext"; 
export default function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito  } = useCarrito();
  const handleEliminar = (id) => {
    eliminarDelCarrito(id);
  };
  const total=carrito.reduce((total, producto) => total + producto.price, 0)
  const messageP = carrito.map(producto => ` -${producto.name}%0A`).join('');
  const message='Buenas,%20desearia%20estos%20productos%0A'+messageP+'%0A Con un total de: '+total+' Bs.%20Gracias!';
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
    <div className="p-8 min-h-[70dvh]">
      <h1 className="text-3xl font-bold mb-6 text-center">Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <div className="flex justify-center items-center flex-col gap-10">
          <p className="block text-center text-2xl">Tu carrito está vacío.</p>
          <Link href="/Productos" className="Btn_animation px-4 py-2 bg-green-500 font-bold md:w-[20%] uppercase rounded-full text-center text-white">Llenar Carrito</Link>
        </div>
      ) : (
        <ul className="space-y-4 w-[90%] m-auto">
          {carrito.map((producto) => (
            <li key={producto._id} className="flex items-center justify-between border-b pb-4 duration-500 translate-y-14 mt-4">
              <div className="flex items-center gap-4">
                <img
                  src={producto.imageURL}
                  alt={producto.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="md:text-xl font-bold">{producto.name}</h2>
                  <p className="text-sm md:text-lg text-gray-600">{producto.mark}</p>
                </div>
              </div>
              <p className="text-sm md:text-lg font-bold">{producto.price} Bs.</p>
              <button className=" bg-red-400 p-1 rounded-full text-white hover:bg-red-500" 
                onClick={() => handleEliminar(producto.id)}
              >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
              </button>
            </li>
          ))}
        </ul>
      )}
      {carrito.length > 0 && (
        <div className="flex flex-col justify-center items-center">
        <button
          onClick={vaciarCarrito}
          className="mt-6 bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-800 m-auto flex justify-center items-center"
        >
          Vaciar Carrito <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M13 17h-7v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /><path d="M22 22l-5 -5" /><path d="M17 22l5 -5" /></svg>
        </button>
        <div className="flex items-center justify-center mt-10 gap-5 md:gap-10">
        <h2 className="text-center text-lg md:text-xl font-semibold">
        Total: {total} Bs.
      </h2>
        <a href={`https://wa.me/+59163524798?text=${message}`}
              target='_blank' className="bg-green-500 p-2 text-white rounded-full hover:bg-green-600 flex justify-center items-center text-sm md:text-lg">
          COMPRAR AHORA <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-camper"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M5 18h-1a1 1 0 0 1 -1 -1v-11a2 2 0 0 1 2 -2h12a4 4 0 0 1 4 4h-18" /><path d="M9 18h6" /><path d="M19 18h1a1 1 0 0 0 1 -1v-4l-3 -5" /><path d="M21 13h-7" /><path d="M14 8v10" /></svg>
        </a>
        </div>
        </div>
      )}
      
    </div>
  );
}
