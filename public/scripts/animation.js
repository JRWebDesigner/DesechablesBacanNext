const translates = document.querySelectorAll('.translate-y-14')
const scales = document.querySelectorAll('.scale-50')
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};
function Atranslate(a, b) {
    a.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.remove('translate-y-14')
            entrada.target.classList.remove('opacity-35')
        }
    });
}
function Ascale(a, b) {
    a.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.remove('scale-50')
            entrada.target.classList.remove('-translate-x-[30%]')
        }
    });
}
function Ascaleof(a, b) {
    a.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.remove('scale-50')
        }
    });
}
let observer = new IntersectionObserver(Atranslate, options);
let observerS = new IntersectionObserver(Ascale, options);
let observerSo = new IntersectionObserver(Ascaleof, options);
translates.forEach((translate) => {
    observer.observe(translate);
});
scales.forEach((scale) => {
    observerS.observe(scale);
    observerSo.observe(scale);
});