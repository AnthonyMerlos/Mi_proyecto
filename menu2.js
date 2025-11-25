document.querySelectorAll('.lista_item--click').forEach(item => {

    let button = item.querySelector('.lista_button--click');
    let submenu = item.querySelector('.lista_subtemas');
    let arrow = item.querySelector('.list_img');

    button.addEventListener('click', () => {

        submenu.classList.toggle('active');  
        arrow.classList.toggle('rotar');     

    });

});