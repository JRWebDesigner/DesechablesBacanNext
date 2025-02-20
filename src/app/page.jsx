"use client"
import CarouselOffers from '@/components/CarouselOffers';
import Carousel from "../components/PhotoCarousel";
import { useEffect } from 'react';
import GetCategory from '@/components/GetCategory';
export default function Home() {
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
      <CarouselOffers />
      
      <h2 className="-translate-x-[30%] scale-50 text-center text-2xl font-bold duration-500 mt-20">
        Nuestras Categorias
      </h2>
      <section className="marcs bg-blue-950 py-14 px-[10%] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url(/background.avif)] bg-center bg-fixed opacity-20 z-0"></div>
        <GetCategory />
      </section>
      <div className="flex justify-around items-center flex-wrap p-16 gap-6">
        <div className="md:w-[40%] grid place-items-center">
          <h2 className="-translate-x-[30%] scale-50 text-center text-2xl font-bold duration-500 mt-20">
            Envases
          </h2>
          <p className="m-auto text-center">
            Encuentra los mejores envases desechables en Desechables Bacán. Ofrecemos una amplia variedad de opciones ecológicas, resistentes y prácticas para alimentos. Ideales para negocios, eventos y uso personal. ¡Calidad y funcionalidad al mejor precio!
          </p>
        </div>
      <Carousel />
      </div>
      <div className="flex justify-center items-center flex-wrap-reverse p-16 gap-6">
        <Carousel />
        <div className="md:w-[40%] grid place-items-center">
          <h2 className="-translate-x-[30%] scale-50 text-center text-2xl font-bold duration-500 mt-20">
            Vasos
          </h2>
          <p className="m-auto text-center">
            Vasos desechables de calidad en Desechables Bacán. Disponibles en diversos tamaños y materiales, ideales para bebidas calientes y frías. Perfectos para restaurantes, cafeterías, eventos o uso personal. ¡Practicidad, resistencia y precio justo!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap p-16 gap-6">
        <div className="md:w-[40%] grid place-items-center">
          <h2 className="-translate-x-[30%] scale-50 text-center text-2xl font-bold duration-500 mt-20">
            Bolsas
          </h2>
          <p className="m-auto text-center">
            Ofrecemos bolsas resistentes, practicas y en diferentes tamanos, idelaes para negocios, eventos y uso diario. <br /> Disponibles en variedad de materiales y colores. ¡Calidad y funcionalidad al mejor
          </p>
        </div>
        <Carousel />
      </div>
    </>
  );
}
