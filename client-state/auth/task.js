const signInBtn = document.getElementById('signin__btn'),
        signInForm = document.getElementById('signin__form'),
        signin = document.getElementById('signin'),
        welcome = document.getElementById('welcome'),
        userId = document.getElementById('user_id');

let error = null;

function showWelcome(user) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.innerText = user;
}

if (localStorage.userId) {
    showWelcome(localStorage.userId)
}

signInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(signInForm);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);

        if (data.success) {
            localStorage.setItem('userId', data.user_id);
            showWelcome(data.user_id);
        } else {
            if (!error) {
                error = document.createElement('div');
                error.style.color = '#f00';
                error.innerText = 'Неверный логин/пароль';
                signInForm.append(error);
            }
        }
    }
});