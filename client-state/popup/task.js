const modalMain = document.querySelector('#subscribe-modal');
const closeBtns = document.querySelectorAll('.modal__close');

function openModal(modal) {
    modal.classList.add('modal_active');
};

function closeModal(modal) {
    modal.classList.remove('modal_active');
};

if (!document.cookie.includes('firstVisit=false')) {
    openModal(modalMain);
}


closeBtns.forEach(btn => {
    const modal = btn.closest('.modal');
    btn.onclick = () => {
        closeModal(modal)
        document.cookie='firstVisit=false';
        console.log(typeof document.cookie)
    };
});