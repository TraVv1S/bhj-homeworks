const dropDowns = Array.from(document.querySelectorAll('.dropdown'));

dropDowns.forEach((dropDown) => {
    const list = dropDown.querySelector('.dropdown__list'),
        ddLinks = Array.from(dropDown.querySelectorAll('.dropdown__link')),
        ddValue = dropDown.querySelector('.dropdown__value');


    dropDown.addEventListener('click', () => {
        list.classList.toggle('dropdown__list_active')
    })

    ddLinks.forEach(link => link.addEventListener('click', (event) => {
            ddValue.textContent = event.target.textContent;
            event.preventDefault();
        })
    )
});