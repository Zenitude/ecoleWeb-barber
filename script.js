// Show / Hidden navigation Header
const menuElements = document.querySelectorAll('.menu, header ul');

menuElements[1].addEventListener('click', (e) => {
    e.preventDefault();

    menuElements[0].classList.toggle('activeMenu');

    e.target.src = e.target.src.includes('hamburger') 
    ? `./ressources/cross.svg` 
    : `./ressources/hamburger.svg`;
})

// Carousel Section #values
const slides = document.querySelector('.carousel .slides');
const dots = document.querySelectorAll('.carousel .dots button');
let index = 0;
slides.innerHTML = `<img src="ressources/slide-${index+1}.jpg" alt="" />`;

const interval = setInterval(() => {
    index++;
    if(index > 2 ) { index = 0 };
    slides.innerHTML = `<img src="ressources/slide-${index+1}.jpg" alt="" />`;
    dots.forEach(dot => dot.classList.replace('activeDots', 'inactiveDots'));
    dots[index].classList.replace('inactiveDots', 'activeDots');
}, 2000)

for(let i = 0 ; i < dots.length ; i++ ) {
    dots[i].addEventListener('click', (e) => {
        e.preventDefault();
        dots.forEach(dot => dot.classList.replace('activeDots', 'inactiveDots'));
        e.target.classList.replace('inactiveDots', 'activeDots');
        slides.innerHTML = `<img src="ressources/slide-${i+1}.jpg" alt="" />`;
    })
}

