import { useCarrito } from "../context/CarritoContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Modal({ product, closeModal }) {
  const { añadirAlCarrito } = useCarrito();

  const aniadido = () => {
    alert("Agregado correctamente");
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
      <div className="w-[90%] md:w-auto relative bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap justify-center items-center min-h-[430px] gap-8">
        <button
          onClick={closeModal}
          className="bg-gray-200 top-2 right-2 text-2xl px-4 py-2 rounded-full hover:bg-red-600 absolute hover:text-white"
        >
          X
        </button>
        
        {/* Carrusel Swiper */}
        <div className="w-[300px] md:w-[500px]">
          <Swiper>
  {/* Imagen principal SIEMPRE (primera slide) */}
  <SwiperSlide>
    <img src={product.image} alt={product.name} />
  </SwiperSlide>

  {/* Galería adicional (si existe) */}
  {product.galleryImages?.map((img, idx) => (
    <SwiperSlide key={idx}>
      <img src={img} alt={`${product.name} - ${idx + 1}`} />
    </SwiperSlide>
  ))}
</Swiper>
        </div>

        <div className='w-[50%] max-w-[500px] min-w-[300px] flex justify-center items-center flex-col'>
          <h2 className="text-2xl font-bold mt-4">{product.name} ----- {product.price}Bs. / {product.xmayor}Bs. por mayor </h2>
          <small className="text-gray-700 mt-2 uppercase">{product.mark} ----- {product.categoryName}</small>
          <div className="flex items-start flex-col w-full">
            <h3 className="font-bold">Descripción</h3>
            <p className="ml-2">
              {product.description}
            </p>
          </div>
          <div className="mt-4 flex justify-around gap-10">
            <button
              onClick={() => { añadirAlCarrito(product); aniadido() }}
              className="flex justify-center items-center bg-blue-600 px-4 py-2 text-sm rounded-full hover:scale-105 text-white"
            >
              Añadir <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
            </button>
            <a
              href={`https://wa.me/+59173534369?text=Hola!%20Estoy%20interesado%20en%20${product.name}%20,marca%20${product.mark}`}
              target='_blank'
              rel="noopener noreferrer"
              onClick={closeModal}
              className="flex justify-center items-center bg-green-500 text-white px-4 py-2 rounded-full hover:scale-105"
            >
              Comprar <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
