"use client"
import Marks from '../components/Marks';
import Carousel from "../components/PhotoCarousel";
import { useEffect } from 'react';
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
      <section className="p-16 flex justify-center items-center flex-wrap gap-10 bg-blue-500 rounded-b-full">
        <h1 className="inline text-center text-4xl font-black text-white">Desechables Bacan: Productos de Calidad para Todas tus Necesidades</h1>
        <div className=" p-2 rounded-full flex justify-center items-center">
          <img className="desch_image w-full h-full object-contain" src="/banner.png" alt="as" />
        </div>
      </section>
      <h2 className="-translate-x-[30%] scale-50 text-center text-3xl font-bold duration-500 mt-20">
        Nuestras Marcas
      </h2>
      <section className="marcs lg:grid grid-cols-5 lg:place-items-center flex justify-center flex-wrap m-auto bg-gradient-to-t to-orange-600 from-yellow-400 py-14 gap-5 px-[10%]">
        <Marks />
      </section>
      <div className="flex justify-around items-center flex-wrap p-16 gap-6">
        <div className="md:w-[40%] grid place-items-center">
          <h2 className="-translate-x-[30%] scale-50 text-center text-3xl font-bold duration-500 mt-20">
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
          <h2 className="-translate-x-[30%] scale-50 text-center text-3xl font-bold duration-500 mt-20">
            Vasos
          </h2>
          <p className="m-auto text-center">
            Vasos desechables de calidad en Desechables Bacán. Disponibles en diversos tamaños y materiales, ideales para bebidas calientes y frías. Perfectos para restaurantes, cafeterías, eventos o uso personal. ¡Practicidad, resistencia y precio justo!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap p-16 gap-6">
        <div className="md:w-[40%] grid place-items-center">
          <h2 className="-translate-x-[30%] scale-50 text-center text-3xl font-bold duration-500 mt-20">
            Bolsas
          </h2>
          <p className="m-auto text-center">
            Bolsas desechables en Desechables Bacan. Ofrecemos bolsas resistentes, prácticas y en diferentes tamaños, ideales para negocios, eventos y uso diario. Disponibles en materiales ecológicos y biodegradables. ¡Calidad y funcionalidad garantizadas!
          </p>
        </div>
        <Carousel />
      </div>
    </>
  );
}
