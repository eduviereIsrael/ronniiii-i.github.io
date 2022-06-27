var drop = document.getElementsByClassName('dropdown');
var link = document.getElementsByClassName('faculties')
var i 


for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', () => {
//         var present = drop[i+1].classList.contains('show');
//         if (present == true) {
//             drop[1+1].classList.remove('show')
// //             alert('hi')
//         }
    for (var j=0; j < drop.length; j++) {
        if(j!==i) drop[j].classList.remove("show");
    }
    drop[i].classList.toggle('show');
    });
}