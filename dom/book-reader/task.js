const fontSizes = document.querySelectorAll('.book__control_font-size .font-size'),
        fontColors = document.querySelectorAll('.book__control_color .color'),
        bgColors = document.querySelectorAll('.book__control_background .color'),
        book = document.getElementById('book');
        
        
        
let size = null,
    color = null,
    bgColor = null;

fontSizes.forEach (fs => {
    fs.addEventListener('click', (event) => {
        const active = document.querySelector('.font-size_active');
        active.classList.remove('font-size_active');

        fs.classList.add('font-size_active');
        
        switch (fs.dataset.size) {
            case 'small': 
                size = 'book_fs-small';
                break;
            case 'big':
                size = 'book_fs-big';
                break;
            default: size = null;
        }
        book.className = `book ${color} ${size} ${bgColor}`

        event.preventDefault();
    });
})

fontColors.forEach (fc => {
    fc.addEventListener('click', (event) => {
        const active = document.querySelector('.book__control_color .color_active');
        active.classList.remove('color_active');

        fc.classList.add('color_active');
        console.log(fc.dataset.textColor)
        switch (fc.dataset.textColor) {
            case 'black': 
                color = 'book_color-black';
                break;
            case 'gray':
                color = 'book_color-gray';
                break;
            case 'whitesmoke':
                color = 'book_color-whitesmoke';
                break;
            default: color = null;
        }
        book.className = `book ${color} ${size} ${bgColor}`

        event.preventDefault();
    });
})

bgColors.forEach (bgc => {
    bgc.addEventListener('click', (event) => {
        const active = document.querySelector('.book__control_background .color_active');
        active.classList.remove('color_active');

        bgc.classList.add('color_active');
        console.log(bgc.dataset.bgColor)
        switch (bgc.dataset.bgColor) {
            case 'black': 
                bgColor = 'book_bg-black';
                break;
            case 'gray':
                bgColor = 'book_bg-gray';
                break;
            case 'white':
                bgColor = 'book_bg-white';
                break;
            default: color = null;
        }
        book.className = `book ${color} ${size} ${bgColor}`

        event.preventDefault();
    });
})