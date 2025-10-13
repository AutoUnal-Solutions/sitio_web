const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const header = document.querySelector('.header-slider');
const title = document.querySelector('.header-slider h2');
const form = document.getElementById('formProductos')
const products = document.querySelectorAll('.slider-gestion');
const productsel = document.getElementById('lang');

let currentIndex = 0;
const items2Show = 1;
const totalItems = 2;
let type_product = "sinfin";
let state = "prev";

header.style.display = 'none';

products.forEach(div => div.style.display = 'none');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    products.forEach(div => div.style.display = 'none');

    type_product = productsel.value;
    state = "prev"
    currentProduct(type_product, state);
})

nextBtn.addEventListener('click', () => {    
    currentProduct(type_product, "post");  
});

prevBtn.addEventListener('click', () => {  
    currentProduct(type_product,"prev");
});

function currentProduct(type, state){
    let titleProduct = "";
    let titleState = "";
    let slider = '';
    let container = '';

    if (type == "sinfin"){
        titleProduct =  " Sin Fin - Corona";
        slider = document.getElementById('slider-gestion-sinfin');
        container = document.getElementById('gestion-container-sinfin');
    } else if ( type == "conicos"){
        titleProduct = " Engranajes Cónicos";
        slider = document.getElementById('slider-gestion-conicos');
        container = document.getElementById('gestion-container-conicos');
    } else if (type == "helicoidales") {
        titleProduct = " Engranajes Helicoidales";
        slider = document.getElementById('slider-gestion-helicoidales');
        container = document.getElementById('gestion-container-helicoidales');
    } else {
        titleProduct = " Sin Fin - Corona";
        slider = document.getElementById('slider-gestion-sinfin');
        container = document.getElementById('gestion-container-sinfin');
    }

    if (state == "prev"){
        titleState = "Pre-Automatización Producto";
        currentIndex = 0;
        nextBtn.style.visibility = 'visible';
        prevBtn.style.visibility = 'hidden';  
    } else if (state == "post") {
        titleState = "Post-Automatización Producto";
        currentIndex = 1;
        nextBtn.style.visibility = 'hidden';
        prevBtn.style.visibility = 'visible';
    }

    header.style.display = 'flex';
    title.textContent = titleState + titleProduct;
    slider.style.display = 'block';
    container.style.transform = `translateX(-${(100 / items2Show) * currentIndex}%)`;
}