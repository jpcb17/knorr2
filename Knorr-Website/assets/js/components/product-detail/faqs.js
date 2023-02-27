const accordion = document.querySelector('.accordion');
const accordionButtons = document.querySelectorAll('.accordion__button');



accordionButtons.forEach( button =>{
    button.addEventListener('click', ()=>{
        const el = button.nextElementSibling;
        if(el.classList.contains('accordion__panel--active') === true){
            button.nextElementSibling.classList.remove('accordion__panel--active');
        }
        else{
            button.nextElementSibling.classList.add('accordion__panel--active');
        }


    });
});


