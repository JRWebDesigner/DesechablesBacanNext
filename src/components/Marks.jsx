"use client";
import { useEffect } from "react";
import ImagesMarks from "./imagesMarks"
export default function Marks(){
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
            <ImagesMarks 
                name='advan'
            />
            <ImagesMarks 
                name='belen'
            />
            <ImagesMarks 
                name='darnel'
            />
            <ImagesMarks 
                name='delsur'
            />
            <ImagesMarks 
                name='docplast'
            />
            <ImagesMarks 
                name='fiveStick'
            />
            <ImagesMarks 
                name='feiteng'
            />
            <ImagesMarks 
                name='isoplast'
            />
            <ImagesMarks 
                name='pastenPlast'
            />
            <ImagesMarks 
                name='sanJorge'
            />
            
            {/* 
        <img className="opacity-35 translate-y-14 scale-50 duration-[500ms]" width="150px" src="/marcas/darnel.png" alt="logo darnel" />
        <img className="opacity-35 translate-y-14 scale-50 duration-[600ms]" width="150px" src="/marcas/delsur.png" alt="logo delsur" />
        <img className="opacity-35 translate-y-14 scale-50 duration-[700ms]" width="150px" src="/marcas/docplast.png" alt="logo docplast" />
        <img className="opacity-35 translate-y-14 scale-50 duration-[800ms]" width="150px" src="/marcas/fivestick.png" alt="logo fivestick" />
        <img className="opacity-35 translate-y-14 scale-50 duration-[900ms]" width="150px" src="/marcas/feiteng.png" alt="logo feiteng" />
        <img className="opacity-35 translate-y-14 scale-50 duration-[1000ms]" width="150px" src="/marcas/isoplast.png" alt="logo isoplast" />
        <img className="opacity-35 translate-y-14 scale-50 duration-[1100ms]" width="150px" src="/marcas/pastenplasy.png" alt="logo pastenplasy" />
        <img className="opacity-35 translate-y-14 scale-50 duration-[1200ms]" width="150px" src="/marcas/sanjorge.png" alt="logo sanjorge" /> */}
        </>
    )
}