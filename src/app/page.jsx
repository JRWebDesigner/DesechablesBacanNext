"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Marks from '@/components/Marks';
import { useEffect } from 'react';
const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}
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
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )
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
      <div className="flex justify-around items-center flex-wrap p-16">
        
        <div className="md:w-[40%] grid place-items-center">
          <h2 className="-translate-x-[30%] scale-50 text-center text-3xl font-bold duration-500 mt-20">
            Envases
          </h2>
          <p className="m-auto text-center">
            Encuentra los mejores envases desechables en Desechables Bacán. Ofrecemos una amplia variedad de opciones ecológicas, resistentes y prácticas para alimentos. Ideales para negocios, eventos y uso personal. ¡Calidad y funcionalidad al mejor precio!
          </p>
        </div>
          <div className="wrapper">
            <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              <div className="carousel__cell number-slide1">1</div>
              <div className="carousel__cell number-slide2">2</div>
              <div className="carousel__cell number-slide3">3</div>
              <div className="carousel__cell number-slide4">4</div>
              <div className="carousel__cell number-slide5">5</div>
              <div className="carousel__cell number-slide6">6</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap-reverse p-16">
        <div id="indicators-carousel" className="relative min-w-[350px] w-[40%] m-auto opacity-35 translate-y-14 duration-500" data-carousel="static">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1qfVEDF5Y7wRUWeMWHUhhMR8RrRMyz7UvvngOFJ8Rq8lKS_p2ed1oJpzig3vJY3ukuA&usqp=CAU" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1qfVEDF5Y7wRUWeMWHUhhMR8RrRMyz7UvvngOFJ8Rq8lKS_p2ed1oJpzig3vJY3ukuA&usqp=CAU" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1qfVEDF5Y7wRUWeMWHUhhMR8RrRMyz7UvvngOFJ8Rq8lKS_p2ed1oJpzig3vJY3ukuA&usqp=CAU" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          </div>
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
        <div className="md:w-[60%] grid place-items-center">

          <h2 className="-translate-x-[30%] scale-50 text-center text-3xl font-bold duration-500 mt-20">
            Vasos
          </h2>
          <p className="m-auto text-center">
            Vasos desechables de calidad en Desechables Bacán. Disponibles en diversos tamaños y materiales, ideales para bebidas calientes y frías. Perfectos para restaurantes, cafeterías, eventos o uso personal. ¡Practicidad, resistencia y precio justo!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap p-16">
        <div className="md:w-[60%] grid place-items-center">

          <h2 className="-translate-x-[30%] scale-50 text-center text-3xl font-bold duration-500 mt-20">
            Bolsas
          </h2>
          <p className="m-auto text-center">
            Bolsas desechables en Desechables Bacan. Ofrecemos bolsas resistentes, prácticas y en diferentes tamaños, ideales para negocios, eventos y uso diario. Disponibles en materiales ecológicos y biodegradables. ¡Calidad y funcionalidad garantizadas!
          </p>
        </div>
        <div id="indicators-carousel" className="relative min-w-[350px] w-[40%] m-auto opacity-35 translate-y-14 duration-500" data-carousel="static">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1qfVEDF5Y7wRUWeMWHUhhMR8RrRMyz7UvvngOFJ8Rq8lKS_p2ed1oJpzig3vJY3ukuA&usqp=CAU" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1qfVEDF5Y7wRUWeMWHUhhMR8RrRMyz7UvvngOFJ8Rq8lKS_p2ed1oJpzig3vJY3ukuA&usqp=CAU" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1qfVEDF5Y7wRUWeMWHUhhMR8RrRMyz7UvvngOFJ8Rq8lKS_p2ed1oJpzig3vJY3ukuA&usqp=CAU" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          </div>
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
