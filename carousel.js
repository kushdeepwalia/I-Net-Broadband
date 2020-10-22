const carouselSlide = document.querySelector('.carousel-slide');
const carouselImage = document.querySelectorAll('.carousel-slide img');
const pointer = document.querySelectorAll('.pointer');


//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//pixel
let pixel = 14;

//counter
let counter = 1;
var size = 0.70 * window.innerWidth;
size = Math.round(size);
pixel = 2;

carouselSlide.style.transform = 'translateX(' + ((-size + pixel) * counter) + 'px)';

window.addEventListener("resize",function(){    
    //size
    size = 0.70 * window.innerWidth;
    size = Math.round(size);
    carouselSlide.style.transform = 'translateX(' + ((-size + pixel) * counter) + 'px)';
});

setInterval(function(){
    counter++;
    carouselSlide.style.transform = 'translateX(' + ((-size + pixel) * counter) + 'px)';
    
    if(counter > carouselImage.length - 1) return;

    carouselSlide.style.transition = "transform 1s ease-in-out";
    
    for (let i = 0; i < pointer.length; i++)
        pointer[i].style.background = "white";

    if(counter === 5)
        pointer[1].style.background = " #2f55d4";
    else
        pointer[counter].style.background = " #2f55d4";
},7000)

//button listeners
nextBtn.addEventListener('click',() => {
    if(counter > carouselImage.length - 1) return;
    
    carouselSlide.style.transition = "transform 1s ease-in-out";
    
    for (let i = 0; i < pointer.length; i++)
        pointer[i].style.background = "white";
    
    counter++;
    
    if(carouselImage[counter].id === 'firstClone')
        pointer[1].style.background = " #2f55d4";
    else
        pointer[counter].style.background = " #2f55d4";
    
    carouselSlide.style.transform = 'translateX(' + ((-size + pixel) * counter) + 'px)';
});

prevBtn.addEventListener('click',() => {
    if(counter <= 0) return;
    
    carouselSlide.style.transition = "transform 1s ease-in-out";
    
    for (let i = 0; i < pointer.length; i++)
        pointer[i].style.background = "white";
    
    counter--;
    
    if(carouselImage[counter].id === 'lastClone')
        pointer[4].style.background = " #2f55d4";
    else
        pointer[counter].style.background = " #2f55d4";
    
    carouselSlide.style.transform = 'translateX(' + ((-size + pixel) * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImage[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImage.length - 2;
        carouselSlide.style.transform = "translateX(" + ((-size + pixel) * counter) + "px)";
    }
    if(carouselImage[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImage.length - counter;
        carouselSlide.style.transform = "translateX(" + ((-size + pixel) * counter) + "px)";
    }
});