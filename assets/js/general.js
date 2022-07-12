const burger = document.querySelector('#burger');
const burgerLine = document.querySelectorAll('#burger .line');
const menu = document.querySelector('.menu.container');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

burger.addEventListener('click', () => {
    menu.classList.toggle('show');
    for (let i = 0; i < burgerLine.length; i++) {
        burgerLine[i].classList.toggle('white');
    }
    line2.classList.toggle('disappear');
    line1.classList.toggle('rot1');
    line3.classList.toggle('rot2');
})

