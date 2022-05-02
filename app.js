const iconMenu = document.querySelector('#icon-menu'),
    menu = document.querySelector('#menu');

iconMenu.addEventListener('click', (e) =>{
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == './image/icon-menu.png'){
        e.target.setAttribute('src', './image/icon-menu2.png');
    }else{
        e.target.setAttribute('src', './image/icon-menu.png');
    }
});

const iconProduct = document.querySelector('#icon-product'),
    product = document.querySelector('#pro');

iconProduct.addEventListener('click', (e) =>{
    product.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActualone = e.target.getAttribute('src');

    if(rutaActualone == './image/product.png'){
        e.target.setAttribute('src', './image/product2.png');
    }else{
        e.target.setAttribute('src', './image/product.png');
    }
});

const iconPlus = document.querySelector('#icon-plus'),
    plus = document.querySelector('#plus');

iconPlus.addEventListener('click', (e) =>{
    plus.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActualtwo = e.target.getAttribute('src');

    if(rutaActualtwo == './image/plus.png'){
        e.target.setAttribute('src', './image/plus2.png');
    }else{
        e.target.setAttribute('src', './image/plus.png');
    }
});