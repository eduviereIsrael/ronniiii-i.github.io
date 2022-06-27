const linkk = document.querySelector('.suscribe')
const linkkk = document.querySelector('.suscribee')
const popup = document.querySelector('.dialog')
const remove = document.querySelector('.js-close')
const background =  document.querySelector('.bg')
const section =  document.querySelector('.section')

linkk.addEventListener('click', () => {
    popup.classList.add("click")
    background.classList.add("color")
    section.classList.add("after")
});
linkkk.addEventListener('click', () => {
    popup.classList.add("click")
    background.classList.add("color")
    section.classList.add("after")
});
remove.addEventListener('click', () => {
    popup.classList.remove("click")
    background.classList.remove("color")
    section.classList.remove("after")
});