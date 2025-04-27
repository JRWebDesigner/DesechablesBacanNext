import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useRouter } from 'next/router'; // Importa useRouter

export default function Offers({ ofertas }) {
  const router = useRouter(); // Inicializa el router

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {ofertas.length > 0 ? (
        ofertas.map((oferta) => (
          <SwiperSlide key={oferta._id}>
            <div 
              onClick={() => router.push(`/productos/${oferta.descripcion}`)} // Redirige al ID del producto
              className='max-h-[3000px] h-[80vh] flex justify-center items-center bg-orange-500 cursor-pointer'
            >
              <img 
                className='h-[80%] md:h-full' 
                src={oferta.image} 
                alt="ofertas" 
              />
            </div>
          </SwiperSlide>
        ))
      ) : (
        <div className="text-center">No hay ofertas disponibles</div>
      )}
    </Swiper>
  );
}
