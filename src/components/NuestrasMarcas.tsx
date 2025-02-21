import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const NuestrasMarcas = () => {
  return (
    <Swiper
    modules={[Autoplay]}
    spaceBetween={30} // Espacio entre logos
    slidesPerView={3} // Número de logos visibles por defecto
    autoplay={{ delay: 1000, disableOnInteraction: false }}
    loop={true}
    breakpoints={{
      // Cuando el ancho es >= 320px (móvil)
      320: {
        slidesPerView: 2, // Muestra 2 logos en móviles pequeños
        spaceBetween: 10, // Espacio reducido
      },
      // Cuando el ancho es >= 480px (móvil grande)
      480: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // Cuando el ancho es >= 768px (tablets)
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // Cuando el ancho es >= 1024px (escritorio)
      1024: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    }}
    >
      <SwiperSlide><img className='md:w-[120px] lg:w-[240px]' src="/marcas/Advan.png" alt="Logo 1" /></SwiperSlide>
      <SwiperSlide><img className='md:w-[120px] lg:w-[240px]' src="/marcas/Belen.png" alt="Logo 2" /></SwiperSlide>
      <SwiperSlide><img className='md:w-[120px] lg:w-[240px]' src="/marcas/Darnel.png" alt="Logo 3" /></SwiperSlide>
      <SwiperSlide><img className='md:w-[120px] lg:w-[240px]' src="/marcas/DelSur.png" alt="Logo 3" /></SwiperSlide>
      <SwiperSlide><img className='md:w-[120px] lg:w-[240px]' src="/marcas/Docplast.png" alt="Logo 3" /></SwiperSlide>
      <SwiperSlide><img className='md:w-[120px] lg:w-[240px]' src="/marcas/Feiteng.png" alt="Logo 3" /></SwiperSlide>
      <SwiperSlide><img className='md:w-[120px] lg:w-[240px]' src="/marcas/FiveStick.png" alt="Logo 3" /></SwiperSlide>
      <SwiperSlide><img className='md:w-[120px] lg:w-[240px]' src="/marcas/Isoplast.png" alt="Logo 3" /></SwiperSlide>
      <SwiperSlide><img className='md:w-[120px] lg:w-[240px]' src="/marcas/PastenPlast.png" alt="Logo 3" /></SwiperSlide>
      <SwiperSlide><img className='md:w-[120px] lg:w-[240px]' src="/marcas/SanJorge.png" alt="Logo 3" /></SwiperSlide>
    </Swiper>
  );
};

export default NuestrasMarcas;