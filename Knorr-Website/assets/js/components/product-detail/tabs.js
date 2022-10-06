const tabs = document.querySelectorAll('.tab__panel');
const tabButtons = [...document.querySelectorAll('.tab__button')];

let x = 0;




function showPanel(num){
    for(let i =0; i<tabs.length; i++){

        if(tabs[i].classList.contains('tab__panel--active'))
        {
            tabs[i].classList.remove('tab__panel--active');
       
        }
    

        if(num == i){
            console.log('ok');
            tabs[i].classList.add('tab__panel--active');
        }
    }
}


