// slider modulos

// Select elements from html 
const carousel = document.querySelector('.modules-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const items2Show = 3;

const totalItems = document.querySelectorAll('.container-img-module').length;

// The funcion TranslateX allows to re-position an element along the x-axis

nextBtn.addEventListener('click', () => {    
    if(currentIndex >= totalItems - items2Show){
        currentIndex = 0;        
    } else {
        currentIndex += items2Show;
    }   
    carousel.style.transform = `translateX(-${(100 / items2Show) * currentIndex}%)`; 
});

prevBtn.addEventListener('click', () => {
    if(0 >= currentIndex - items2Show){
        currentIndex = 0; 
    } else {
        currentIndex -= items2Show;
    }
    carousel.style.transform = `translateX(-${(100 / items2Show) * currentIndex}%)`;
});