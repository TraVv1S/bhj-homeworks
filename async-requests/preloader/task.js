const loader = document.getElementById('loader'),
        itemsElement = document.getElementById('items');

const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com')
xhr.send();

xhr.onreadystatechange = function() {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        loader.classList.remove('loader_active');
        let responce = JSON.parse(xhr.responseText);
        render(responce);
    };
};

function render(resp) {
    let valutes = resp.response.Valute;
    for (let valute in valutes) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        let itemContent = `
        <div class="item__code">
            ${valute}
        </div>
        <div class="item__value">
            ${valutes[valute].Value}
        </div>
        <div class="item__currency">
            руб.
        </div>
        `;

        itemsElement.append(newItem);

        newItem.insertAdjacentHTML("beforeend", itemContent);
    }
}