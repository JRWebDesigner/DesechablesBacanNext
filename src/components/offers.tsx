// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Offers(){
  let swiperslides=['/oferta.jpeg','/oferta.jpeg','/oferta.jpeg'];

  return (
    <Swiper
    modules={[Navigation]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
			{
				swiperslides.map((slide,index)=>(
					<SwiperSlide key={index}>
						<div className='max-h-[3000px] h-[60vh] flex justify-center items-center bg-blue-950'> 
								<img className='object-cover
								h-full
								' src
								={slide} alt="oferta 1" />
						</div>
					</SwiperSlide>
				))
			}
      
    </Swiper>
  );
};
