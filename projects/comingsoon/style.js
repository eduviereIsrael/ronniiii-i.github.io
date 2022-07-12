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
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;

  // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
}, 1000);