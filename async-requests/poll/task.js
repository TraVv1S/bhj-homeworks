const pollTitle = document.getElementById('poll__title'),
        pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        let responce = JSON.parse(xhr.responseText);
        render(responce);
    };
};

function render(resp) {
    let answers = resp.data.answers;

    pollTitle.innerHTML = resp.data.title;
    answers.forEach((answer, i) => {
        let button = document.createElement('button');
        button.classList.add('poll__answer');
        button.innerText = answer;
        pollAnswers.append(button);

        button.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
    });
}