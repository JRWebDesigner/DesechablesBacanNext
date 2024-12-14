"use client"
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
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
    <div className="w-[500px] scale-50 duration-500">
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img src="https://via.placeholder.com/600x300" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/600x300/" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/600x300/" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}