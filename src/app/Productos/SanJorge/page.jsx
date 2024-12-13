"use client"
import { useEffect } from 'react'
import products from '../products.json'
export default function SanJorge(){
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
  return(
      <>
				<h1 data-aos='fade-up' className="text-center font-bold text-3xl mt-20">San Jorge</h1>
        <div className="flex flex-wrap justify-around items-center gap-5 m-10">
				{
        products.filter(prod=>prod.mark.toUpperCase()==='SAN JORGE').length== 0 ? (
          <div className='flex justify-center items-center text-2xl'>Se nos acabo los Productos de la marca San Jorge</div>
        ):(products
      .filter((prod) => prod.mark.toUpperCase() === 'SAN JORGE')
      .map((prod) => (
        <div 
          key={prod.id} 
          className="flex flex-col justify-center items-center shadow-xl w-[240px] p-4 text-xl font-bold gap-3 rounded-3xl hover:scale-[1.05] hover:bg-gray-100 duration-500 translate-y-14 scale-50"
        >
          <img 
            src={prod.img} 
            alt={prod.name} 
          />
          <span>
            {prod.name}
          </span>
          <small 
            className="text-black uppercase"
          >
            {prod.mark}
          </small>
          <div className="w-full flex justify-around items-center text-sm gap-3 font-semibold">
            <button className="bg-green-400 p-2 rounded-xl hover:scale-110">AÑADIR</button>
          </div>
        </div>
      )))}
        </div>
      </>
    )
}