const blocks = document.querySelectorAll('.tabs');

blocks.forEach(block => {
    let tabs = block.querySelectorAll('.tab'),
    tabContents = block.querySelectorAll('.tab__content');

    tabs.forEach((tab,index) => {

        tab.addEventListener('click', () => {
            
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('tab_active');
                tabContents[i].classList.remove('tab__content_active');
            }
    
            tabs[index].classList.add('tab_active');
            tabContents[index].classList.add('tab__content_active');
        })
    })

})

