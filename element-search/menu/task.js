let menuLinks = document.querySelectorAll('.menu__link');
let subMenus = document.querySelectorAll('.menu_sub');

function closeSubMenus() {
    subMenus.forEach(sub => {
        sub.classList.remove('menu_active');
    })
};

menuLinks.forEach(link => link.onclick = function() {
    let subMenu = link.parentElement.querySelector('.menu_sub');
    if (subMenu) {
        if (subMenu.classList.contains("menu_active")) {
            closeSubMenus();
        } else {
            closeSubMenus();
            subMenu.classList.add('menu_active');
        };
        return false;
    }
});