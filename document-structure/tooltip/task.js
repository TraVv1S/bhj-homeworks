const hasTooltip = document.querySelectorAll('.has-tooltip');

function clearTooltips() {
    const renderedTooltips = document.querySelectorAll('.tooltip')
            renderedTooltips.forEach(el => {
                el.remove();
            });
}

hasTooltip.forEach(el => {
    el.addEventListener('click', (event) => {
        event.preventDefault();

        let nextEl = el.nextElementSibling;
        if (nextEl && nextEl.className === 'tooltip') {
            nextEl.remove();

        } else {
            clearTooltips();

            const coords = el.getBoundingClientRect();
            const tip = el.title;
            
            let tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerText = tip;
            tooltip.style.top = coords.top + coords.height + window.pageYOffset + 'px';
            tooltip.style.left = coords.left + window.pageXOffset + 'px';
            tooltip.style.display = "block";            

            el.after(tooltip);
        }
    });
});

document.body.addEventListener('click', (e) => {
    if (e.target.className !== 'has-tooltip') {
        clearTooltips();
    }
});