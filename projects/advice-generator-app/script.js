const id = document.querySelector('#adviceID');
const text = document.querySelector('#text');
const dice = document.querySelector('.green');
const adviceUrl = "https://api.adviceslip.com/advice"

function display() {
    id.innerHTML = data.slip.id;
    text.innerHTML = data.slip
    console.log(data);
}

function generateAdvice() {
    fetch(adviceUrl)
    .then(response => response.json())
    .then(data => display(data))
    .catch(() => alert('API Could not be reached at this time'))
}

dice.addEventListener('click', generateAdvice);