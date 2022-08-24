const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const slides = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));

let index = 0;
dots[index].classList.add('slider__dot_active');

function changeSlide(newIndex) {
    slides[newIndex].classList.add('slider__item_active');
    dots[newIndex].classList.add('slider__dot_active');
    slides[index].classList.remove('slider__item_active');
    dots[index].classList.remove('slider__dot_active');
    index = newIndex;
};

dots.forEach((dot, i) => dot.onclick = () => {
    let newIndex = i;
    changeSlide(newIndex);
});

arrowPrev.onclick = () => {
    let newIndex = (index === 0) ? slides.length - 1 : index - 1;
    changeSlide(newIndex);
};

arrowNext.onclick = () => {
    const newIndex = (index === slides.length - 1) ? 0 : index + 1;
    changeSlide(newIndex);
};