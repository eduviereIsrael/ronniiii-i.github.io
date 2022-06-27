const linkk = document.querySelector('.link')
const linkk2 = document.querySelector('.link2')
const popup = document.querySelector('.dialog')
const remove = document.querySelector('.js-close')
const background =  document.querySelector('.bg')
const section =  document.querySelector('.section')
const change  = document.querySelector('.submit')
var email = document.forms["suscribe"]["email"]
var border = document.querySelector('.email')
var alerrt = document.getElementById('label')
var text = "Please enter your Email"


linkk.addEventListener('click', () => {
    popup.classList.add("click")
    background.classList.add("color")
    section.classList.add("after")
});
linkk2.addEventListener('click', () => {
    popup.classList.add("click")
    background.classList.add("color")
    section.classList.add("after")
});
remove.addEventListener('click', () => {
    popup.classList.remove("click")
    background.classList.remove("color")
    section.classList.remove("after")
    alerrt.innerHTML= null
    border.style.border= '1px solid #fff'
});
function submit() {
    if (email.value == "") {
        alerrt.innerHTML = text
        border.style.border= '1px solid #fa3246'
    } else {
        alerrt.innerHTML = null
    }
}