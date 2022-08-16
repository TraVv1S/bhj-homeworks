const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const getHole = i => {
    return document.getElementById(`hole${i}`)
}

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);
    hole.onclick = function() {
        if (hole.className.includes( 'hole_has-mole' )) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if (lost.textContent == 5) {
            console.log('lost')
            alert('Вы проиграли =(')
            dead.textContent = 0;
            lost.textContent = 0;
            
        }
    
        if (dead.textContent == 10) {
            alert('Вы выиграли!')
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}

