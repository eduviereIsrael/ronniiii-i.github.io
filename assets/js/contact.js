const tx = document.getElementsByTagName("textarea");
console.log(tx.length)
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + 50 + "px;overflow-y:auto;");
  tx[i].addEventListener("input", OnInput, false);
}
console.log(tx.length)

function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
  console.log('ffd')
}

const tab = document.querySelectorAll('.tab');
const tabs = document.querySelectorAll('.tab span');
const widget = document.querySelectorAll('.inputs .widget');
const but = document.querySelector('.buttons button');
const inputs = document.querySelectorAll('[name="details"]');

function next() {
  inputChange()
  for (let i = 0; i < widget.length; i++) {
    tabs[i].innerHTML = inputs[i].value;
    if (tabs[i].innerHTML !== ""){
      tab[i].classList.add('show');
    }
  }
  if (widget[2].classList.contains('show')){
    but.style.display = 'none';
  }
}
function inputChange() {
  if (widget[0].classList.contains('show')) {
    if (inputs[0].value == "") {
      window.alert('fill out fielde');
    } else {
      widget[1].classList.add('show');
      widget[0].classList.remove('show');
    }
  }
  if (widget[1].classList.contains('show')) {
    if (inputs[1].value !== "") {
      widget[2].classList.add('show');
      widget[1].classList.remove('show');
    } else {
    }
  }
  widget[1].classList.toString()
}
for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', () => {
    for (var j=0; j < widget.length; j++) {
        if(j!==i) widget[j].classList.remove("show");
    }
    widget[i].classList.add('show');
    
  if (widget[2].classList.contains('show')){
    but.style.display = 'none';
  } else{
    but.style.display = 'inline-block';
  }
  })
}