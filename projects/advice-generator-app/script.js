const id = document.querySelector('#adviceID');
const text = document.querySelector('#text');
const dice = document.querySelector('.green');
const adviceUrl = "https://api.adviceslip.com/advice"

function display(data) {
    id.innerHTML = data.slip.id;
    text.innerHTML = data.slip.advice
    console.log(data);
}

function generateAdvice() {
    fetch(adviceUrl)
    .then(response => response.json())
    .then((data)=> display(data))// output will be the required data
    .catch( (error) => console.log(error))
}
generateAdvice();
dice.addEventListener('click', generateAdvice);