"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Marks({categorys}){
  const router = useRouter();
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
      const handleCategoryClick = (categoryName) => {
        const formattedName = categoryName.toLowerCase().replace(/\s+/g, '-');
        router.push(`/Productos/${formattedName}`);
      };
    return(
        <div className='relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center justify-center m-auto gap-5'>
            {categorys.map((category, index) => (
                <div key={index} className='flex flex-col justify-center items-center min-h-[150px] scale-50 duration-400' onClick={() => handleCategoryClick(category.name)}>
                    <img src={category.image} alt={category.name} className='object-cover max-h-[100px] scale-50' /> 
                    <div className='md:text-xl font-bold text-white uppercase text-center'>{category.name}</div>
                </div>
              ))
            }
        </div>
    )
}
