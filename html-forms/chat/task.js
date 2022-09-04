const chat = document.querySelector('.chat-widget'),
        chatBadge = document.querySelector('.chat-widget__side')
        input = document.getElementById('chat-widget__input'),
        messages = document.querySelector( '.chat-widget__messages' ),
        isFirstMessage = true,
        autoStartChat = null;

const botMessages = [
    'Добрый день!',
    'Как дела?',
    'Смешная шутка!)',
    'Возможно лучше позвать оператора',
    'Оставайтесь на связи, Ваш вопрос очень важен',
    'Уточните Ваш вопрос, пожалуйста!',
    'Всего доброго, спасибо что воспользовались нашими услугами!',
];

function handleMessage(e)  {
    if (e.key === 'Enter' && input.value.trim()) {

        renderMessage('user', input.value);
        input.value = '';

        if (isFirstMessage) {
            isFirstMessage = false;
            clearTimeout(autoStartChat);
            renderMessage('bot', botMessages[0]);
        } else {
            renderMessage('bot');
        };

		messages.parentElement.scrollTop = messages.parentElement.scrollHeight; // scroll bottom
    }
}

function renderMessage(author, msg) {
    const timestamp = new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
    });
    
    let newMessage = '',
        msgClass = 'message'

    if (author === 'user') {
        newMessage = msg;
        msgClass += ' message_client';
    } else {
        const randomAnswer = botMessages[Math.floor(Math.random() * botMessages.length)];
        newMessage = msg ? msg : randomAnswer;
    }
    
    messages.innerHTML += `
        <div class="${msgClass}">
            <div class="message__time">${timestamp}</div>
            <div class="message__text">
            ${newMessage}
            </div>
        </div>
    `;
}

chatBadge.addEventListener('click', function() {
    chat.classList.add('chat-widget_active')
    autoStartChat = setTimeout(() => {
        renderMessage('bot', 'Привет! Поговори со мной');
        isFirstMessage = false;
    }, 3000);
});

input.addEventListener('keypress', handleMessage);