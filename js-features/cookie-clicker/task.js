const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
let counter = 0;

const speedCounter = document.getElementById('clicker__speed-counter');
let lastClickTime = new Date();

function speedChecker() {
    const now = new Date()
}

cookie.onclick = function() {
    clickerCounter.textContent = ++counter;
    cookie.width = counter % 2 === 0 ? 200 : 300;
    
    const clickTime = new Date();
    speedCounter.textContent = (1000 / (clickTime - lastClickTime)).toFixed(2);
    lastClickTime = clickTime;
}