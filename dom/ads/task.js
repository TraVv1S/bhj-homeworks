window.onload = function() {
    const firstAd = document.querySelector('.rotator').firstElementChild;
    let nextAd = firstAd,
        { speed, color } = nextAd.dataset;
    
    function changeAd() {
        
        nextAd.classList.remove('rotator__case_active');

        nextAd = nextAd.nextElementSibling
        if (nextAd === null) {
            nextAd = firstAd;
        };

        speed = nextAd.dataset.speed;
        color = nextAd.dataset.color;

        nextAd.style.color = color;
        nextAd.classList.add('rotator__case_active');
        

        setTimeout(changeAd, speed);
    }

    changeAd(speed);
 };