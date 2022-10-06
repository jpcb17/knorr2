const body = document.querySelector('body');
const reviewBtn = document.querySelector('.review-btn');
const reviewModal = document.querySelector('.review-modal');
const closeBtn = document.querySelector('.review-modal__close');

reviewBtn.addEventListener('click', ()=>{

    reviewModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () =>{
    reviewModal.style.display = 'none';
});