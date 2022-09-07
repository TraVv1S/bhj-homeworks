const editor = document.getElementById('editor');
const clearBtn = document.getElementById('clear');

let savedData = localStorage.text;

if (savedData) {
    editor.value = savedData;
}

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);
})

clearBtn.addEventListener('click', () => {
    editor.value = '';
    delete localStorage.text;
})