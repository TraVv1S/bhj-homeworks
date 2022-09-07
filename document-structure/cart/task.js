const products = document.querySelectorAll('.product'),
    cart = document.querySelector('.cart__products');
    cartBlock = document.querySelector('.cart');

products.forEach(product => {
    const addBtn = product.querySelector('.product__add'),
        incBtn = product.querySelector('.product__quantity-control_inc'),
        decBtn = product.querySelector('.product__quantity-control_dec'),
        quantityEl = product.querySelector('.product__quantity-value');

    incBtn.addEventListener('click', () => quantityEl.textContent++);
    decBtn.addEventListener('click', () => {
        if (quantityEl.textContent > '1') {
            quantityEl.textContent--;
        } 
    });

    function addProductToCart() {

        cartBlock.style.display = 'block';

        const id = product.dataset.id,
            image = product.querySelector('.product__image').src,
            quantity = +quantityEl.textContent;

        let newProduct = true;

        const cartProducts = cart.querySelectorAll('.cart__product');

        for (let item of cartProducts) {
            if (item.dataset.id === id) {
                let count = item.querySelector('.cart__product-count');
                count.innerText = +count.innerText + quantity;
                newProduct = false;
                break;
            }
        }

        if (newProduct) {
            const newCartProduct = `
            <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${image}">
                <div class="cart__product-del">X</div>
                <div class="cart__product-count">${quantity}</div>
            </div>
            `;
            
            cart.insertAdjacentHTML("beforeend", newCartProduct);
            
            const delBtns = document.querySelectorAll('.cart__product-del');
            delBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    if (!cart.firstElementChild) {
                        cartBlock.style.display = 'none';
                    }
                });
            });
        }
    }
    addBtn.addEventListener('click', addProductToCart);

});