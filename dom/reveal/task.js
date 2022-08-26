const reveal = document.querySelectorAll('.reveal');

function letReveal() {
    reveal.forEach(el => {
        let { top, bottom } = el.getBoundingClientRect();
        
        if (bottom > 0 && top < window.innerHeight) {
            el.classList.add('reveal_active');
        } else if (el.classList.contains('reveal_active')){
            el.classList.remove('reveal_active');
        };
    });
}

window.addEventListener('scroll', letReveal);