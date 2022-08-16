const timer = document.getElementById('timer')

const countDown = setInterval(() => {
    timer.textContent--
    if (timer.textContent === '0') {
        clearInterval(countDown);
        alert('Вы победили в конкурсе')
    }
}, 1000)