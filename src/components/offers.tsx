import React, {useRef, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

export default function Offers(){
  let swiperslides=['/oferta.jpeg','/oferta.jpeg','/oferta.jpeg'];
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
			{
				swiperslides.map((slide,index)=>(
					<SwiperSlide key={index}>
						<div className='max-h-[3000px] h-[80vh] flex justify-center items-center bg-blue-950'> 
								<img className=' h-[80%]
								md:h-full
								' src
								={slide} alt="oferta 1" />
						</div>
					</SwiperSlide>
				))
			}
    </Swiper>
  );
};
