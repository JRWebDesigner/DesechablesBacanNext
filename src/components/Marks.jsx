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
                name='Advan'
            />
            <ImagesMarks 
                name='Belen'
            />
            <ImagesMarks 
                name='Darnel'
            />
            <ImagesMarks 
                name='DelSur'
            />
            <ImagesMarks 
                name='Docplast'
            />
            <ImagesMarks 
                name='FiveStick'
            />
            <ImagesMarks 
                name='Feiteng'
            />
            <ImagesMarks 
                name='Isoplast'
            />
            <ImagesMarks 
                name='PastenPlast'
            />
            <ImagesMarks 
                name='SanJorge'
            />
        </>
    )
}