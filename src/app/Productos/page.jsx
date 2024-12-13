"use client"
import { useEffect } from 'react'
import products from './products.json'
export default function Productos() {
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
			<h1 className="text-center uppercase font-bold text-3xl mt-10">Todos nuestros productos</h1>
            <div className="flex flex-row-reverse flex-wrap justify-center items-center gap-16 m-10">
            {
                products.map((prod)=>(
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
                ))
            }
            </div>
        </>
    )
}