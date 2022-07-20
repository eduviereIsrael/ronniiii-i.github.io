const menuBut = document.querySelector('.burger');
const menu = document.querySelector('.responsive');
const menuClose = document.querySelector('#close');
const collTitle = document.querySelectorAll('.collName');
const dropdown = document.querySelectorAll('.dropdown');
const arrowIcon = document.querySelectorAll('.responsive a img');

menuBut.addEventListener('click', () => {
    menu.classList.add('show');
});
menuClose.addEventListener('click', () => {
    menu.classList.remove('show');
});
for (let i = 0; i < collTitle.length; i++) {
    collTitle[i].addEventListener('click', () => {
        for (var j=0; j < dropdown.length; j++) {
            if(j!==i) {
                dropdown[j].classList.remove("show")
                arrowIcon[j].classList.remove('change');
            };
        }
        dropdown[i].classList.toggle('show');
        arrowIcon[i].classList.toggle('change');
    })
}