        let listElements = document.querySelectorAll('.lista_button--click');

listElements.forEach(listElement =>{
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle('arrow');
    });  
});
