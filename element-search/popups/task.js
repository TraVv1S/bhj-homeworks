const modalMain = document.querySelector('#modal_main');
const closeBtns = document.querySelectorAll('.modal__close');
const btnSuccess = document.querySelector('.show-success');
const modalSuccess = document.querySelector('#modal_success');

function openModal(modal) {
    console.log(`Open ${modal.id}`);
    modal.classList.add('modal_active');
};

function closeModal(modal) {
    console.log(`close ${modal.id}`);
    modal.classList.remove('modal_active');
};

openModal(modalMain);

closeBtns.forEach(btn => {
    const modal = btn.closest('.modal');
    btn.onclick = () => closeModal(modal);
});

btnSuccess.onclick = () => {
    closeModal(modalMain);
    openModal(modalSuccess);
};