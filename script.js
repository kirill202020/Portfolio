let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.nav');
let lock = document.querySelector('body');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    lock.classList.toggle('lock');
})