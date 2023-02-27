const navBurger = document.querySelector('#nav-i-bars');
const mobileNav = document.querySelector('.global-nav__mobile__nav');
const closeNavLeft = document.querySelector('#nav-i-close-left');



navBurger.addEventListener('click', () =>{
    console.log('e');
    mobileNav.classList.toggle('hidden');
});

closeNavLeft.addEventListener('click', ()=>{
    mobileNav.classList.toggle('hidden');
});