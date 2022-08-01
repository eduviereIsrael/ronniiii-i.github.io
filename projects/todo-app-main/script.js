const addnew = document.querySelector('[name="addnew"]')
const add = document.querySelector('[name="new"]')

var all = [];
active = [];
var complete = [];

var list = document.querySelector('#tasks');

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
list.addEventListener('click', () => {
    updateSub();
    console.log(active);
})
function updateSub() {
    var listItem = document.querySelectorAll('[name="listItem"]');
    var itemDesc = document.querySelectorAll('.itemdesc');
    active = [...all];
    for (let i = 0; i < all.length; i++) {
        if (listItem[i].checked == true) {
            complete.push(itemDesc[i].innerHTML);
            complete.push()
            active.splice(complete.push())
        }
    }
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
        </li>
        `
    }
    list.innerHTML = htmlCode;
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
    list.innerHTML = htmlCode;
}
function displayCompleted() {
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
    list.innerHTML = htmlCode;
}
function clearComplete() {
    var htmlCode = `<em style="text-align: center; width: 100%; padding: 20px;">add a todo item</em>`;
    complete = [];
    list.innerHTML = htmlCode;
}