var myNodelist = document.getElementsByTagName("LI");
var toggleSwitch = document.querySelector('img[alt="theme"]');
const addnew = document.querySelector('[name="addnew"]')
const add = document.querySelector('[name="new"]')
const count = document.querySelector('#count')

var all = [];
active = [];
var complete = [];

var lists = document.querySelectorAll('ul');
var list = document.querySelector('.list');


toggleSwitch.addEventListener('click', () => {
    var theme = document.getElementsByTagName('link')[2];
    if (theme.getAttribute('href') == 'light.css') {
        theme.setAttribute('href', 'dark.css')
    } else {
        theme.setAttribute('href', 'light.css')
    }
})
add.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    addnew.checked = true
    all.push(add.value);
    window.setTimeout(() => {
        addnew.checked = false;
        add.value = '';
    },500);
    console.log(all);
    displayAll();
    }
})
addnew.addEventListener('click', () => {
    if (addnew.checked == true) {
        all.push(add.value);
        window.setTimeout(() => {
            addnew.checked = false;
            add.value = '';
        },500);
        console.log(all);
        displayAll();
    }
})
list.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI' || ev.target.tagName === 'P' || ev.target.tagName === 'LABEL') {
      ev.target.classList.toggle('checked');
      console.log('li');
    }
    console.log(ev.target.tagName);
    updateSub();
    // console.log(active);
    // list.childElementCount();
    // count.innerHTML
}, false)
function updateSub() {
}

function displayAll() {
    var htmlCode = "";

    for (let i = 0; i < all.length; i++) {
        htmlCode+= `
        <li>
            <div class="check">
                <input type="checkbox" name="listItem" id="item${i}">
                <label for="item${i}"></label>
            </div>
            <p class="itemdesc">${all[i]}</p>
            <i class="fas fa-times"></i>
        </li>
        `
    }
    lists[0].innerHTML = htmlCode;
    lists[0].style.display = 'block';
    lists[1].style.display = 'none';
    lists[2].style.display = 'none';
}
function displayActive() {
    var htmlCode = "";

    for (let i = 0; i < active.length; i++) {
        htmlCode+= `
        <li>
            <div class="check">
                <input type="checkbox" name="listItem" id="item${i}">
                <label for="item${i}"></label>
            </div>
            <p class="itemdesc">${active[i]}</p>
        </li>
        `
    }
    lists[1].innerHTML = htmlCode;
    lists[1].style.display = 'block';
    lists[0].style.display = 'none';
    lists[2].style.display = 'none';
}
function displayCompleted() {
    const completed =document.querySelectorAll('li.checked p');
    console.log(...completed);
    complete.push(...completed);
    var htmlCode = "";

    for (let i = 0; i < complete.length; i++) {
        htmlCode+= `
        <li>
            <div class="check">
                <input type="checkbox" name="listItem" id="item${i}">
                <label for="item${i}"></label>
            </div>
            <p class="itemdesc">${complete[i]}</p>
        </li>
        `
    }
    lists[2].innerHTML = htmlCode;
    lists[2].style.display = 'block';
    lists[1].style.display = 'none';
    lists[0].style.display = 'none';
}
function clearComplete() {
    var htmlCode = `<em style="text-align: center; width: 100%; padding: 20px;">add a todo item</em>`;
    complete = [];
    list.innerHTML = htmlCode;
}
function del(i) {
    if (lists[0].style.display == 'block') {
        all.splice(i,1);
        displayAll();
        // var alertt = document.getElementById('alertt');
        // alertt.innerHTML="Course Deleted"
        // alertt.classList.add("alerting");
        // window.setTimeout(removeAlert,3000);
    } else if (lists[1].style.display == 'block') {
        active.splice(i,1);
        displayActive();
        // var alertt = document.getElementById('alertt');
        // alertt.innerHTML="Course Deleted"
        // alertt.classList.add("alerting");
        // window.setTimeout(removeAlert,3000);
    } else 
    if (lists[2].style.display == 'block') {
        complete.splice(i,1);
        displayCompleted();
        // var alertt = document.getElementById('alertt');
        // alertt.innerHTML="Course Deleted"
        // alertt.classList.add("alerting");
        // window.setTimeout(removeAlert,3000);
    }
}