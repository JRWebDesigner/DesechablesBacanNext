import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

export default function Offers({ofertas}) {
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
        ofertas.map((oferta)=>(
          <SwiperSlide key={oferta._id}>
            <Link href={`${oferta.descripcion}`} className='max-h-[3000px] h-[80vh] flex justify-center items-center bg-orange-500'> 
                <img className=' h-[80%]
                md:h-full
                ' src
                ={oferta.image} alt="ofertas" />
            </Link>
          </SwiperSlide>
        ))
      ) : (
        <div className="text-center">No hay ofertas disponibles</div>
      )}
    </Swiper>
  );
};
