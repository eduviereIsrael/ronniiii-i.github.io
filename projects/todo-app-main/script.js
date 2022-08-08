var toggleSwitch = document.querySelector('img[alt="theme"]');
const addnew = document.querySelector('[name="addnew"]')
const add = document.querySelector('[name="new"]')
const countIt = document.querySelector('#count')

var all = [];
var active = [];
var complete = [];

var lists = document.querySelectorAll('ul');
var views = document.querySelectorAll('.views a');
var list = document.querySelector('.list');

countIt.innerHTML = active.length;
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
    var newItem
    if (event.key === "Enter") {
    addnew.checked = true
    newItem = {
        val: add.value,
        checked: false
    }
    all.push(newItem);        
    active.push(newItem);
    window.setTimeout(() => {
        addnew.checked = false;
        add.value = '';
    },300);
    displayAll();
    count();
    }
})
addnew.addEventListener('click', () => {
    var newItem
    if (addnew.checked == true) {
        newItem = {
            val: add.value,
            checked: false
        }
        all.push(newItem);        
        active.push(newItem);
        window.setTimeout(() => {
            addnew.checked = false;
            add.value = '';
        },300);
        displayAll();
        count();
    }
})
list.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LABEL' || ev.target.tagName === 'P' || ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        sortAllList();
        if (lists[1].style.display == 'block') {
              activeToComplete();
        }
        if (lists[2].style.display == 'block') {
              completeToActive();
        }
        sortActive();
        sortComplete();
    }
    if (all.length == 0) {
        var htmlCode = `<em style="text-align: center; width: 100%; padding: 20px;">add a todo item</em>`;
        lists[0].innerHTML = htmlCode;
        
    }
    if (active.length == 0) {
        var htmlCode = `<em style="text-align: center; width: 100%; padding: 20px;">add a todo item</em>`;
        lists[1].innerHTML = htmlCode;
        
    }
    if (complete.length == 0) {
        var htmlCode = `<em style="text-align: center; width: 100%; padding: 20px;">complete a todo item</em>`;
        lists[2].innerHTML = htmlCode;
        
    }
    // console.log(ev.target.tagName);
})
views[0].classList.add('view')
function displayAll() {
    var htmlCode = "";

    if (all.length !== 0) {
        for (let i = 0; i < all.length; i++) {
            htmlCode+= `
            <li draggable="true">
                <div class="check">
                    <input type="checkbox" name="listItem" id="item${i}">
                    <label for="item${i}"></label>
                </div>
                <p class="itemdesc">${all[i].val}</p>
                <span onclick="del(${i})">X</span>
            </li>
            `
        }
        lists[0].innerHTML = htmlCode;
    }
    lists[0].style.display = 'block';
    lists[1].style.display = 'none';
    lists[2].style.display = 'none';
    views[0].classList.add('view')
    views[1].classList.remove('view')
    views[2].classList.remove('view')
    count()
    keepChecked();

}
function displayActive() {
    // sortActive();
    var htmlCode = "";

    if (active.length !== 0) {
        for (let i = 0; i < active.length; i++) {
            htmlCode+= `
            <li draggable="true">
                <div class="check">
                    <input type="checkbox" name="listItem" id="item${i}">
                    <label for="item${i}"></label>
                </div>
                <p class="itemdesc">${active[i].val}</p>
                <span onclick="del(${i})">X</span>
            </li>
            `
        }
        lists[1].innerHTML = htmlCode;   
    }
    lists[1].style.display = 'block';
    lists[0].style.display = 'none';
    lists[2].style.display = 'none';
    views[1].classList.add('view')
    views[0].classList.remove('view')
    views[2].classList.remove('view')
    count()
}
function displayCompleted() {
    let unique = [...new Set(complete)]
    // console.log(unique[0].val);
    var htmlCode = "";

    if (unique.length !== 0) {
        for (let i = 0; i < unique.length; i++) {
            htmlCode+= `
            <li draggable="true" class="checked">
                <div class="check">
                    <input type="checkbox" name="listItem" id="item${i}">
                    <label for="item${i}"></label>
                </div>
                <p class="itemdesc">${unique[i].val}</p>
                <span onclick="del(${i})">X</span>
            </li>
            `
        }  
        lists[2].innerHTML = htmlCode;
    }
    lists[2].style.display = 'block';
    lists[1].style.display = 'none';
    lists[0].style.display = 'none';
    views[2].classList.add('view')
    views[0].classList.remove('view')
    views[1].classList.remove('view')
    count()

}
function clearComplete() {
    var htmlCode = `<em style="text-align: center; width: 100%; padding: 20px;">complete a todo item</em>`;
    complete = [];
    lists[2].innerHTML = htmlCode;
}
function del(theIndex) {
    let i = theIndex;
    if (lists[0].style.display == 'block') {
        all.splice(i,1);
        displayAll();
    }
    if (lists[1].style.display == 'block') {
        active.splice(i,1);
        let removeFromAll = all.find(el => {
            el == active.splice()
        })
        all.splice(removeFromAll,1);
        displayActive();
    }
    if (lists[2].style.display == 'block') {
        complete.splice(i,1);
        let removeFromAll = all.find(el => {
            el == complete.splice()
        })
        all.splice(removeFromAll,1);
        displayCompleted();
    }
    sortActive();
    sortComplete();
}
function count() {
    // to keep count of active items
    countIt.innerHTML = active.length;
}
function sortAllList() {
    // to sort the items into active and completed
    const items =document.querySelectorAll('li');
    for (let i = 0; i < all.length; i++) {
        if (items[i].classList.contains('checked') == true) {
            all[i].checked = true
        }  else {
            all[i].checked = false
        }      
    }
}
function activeToComplete() {
    const items = document.querySelectorAll('#task2 li')
    for (let i = 0; i < active.length; i++) {
        if (items[i].classList.contains('checked') == true) {
            active[i].checked = true;
            active.splice(i,1);
            console.log(active.splice());
        }  else {
            active[i].checked = false
        }  
    }
}
function keepChecked() {
    // to keep the completed items checked afetr changing views
    const allItems = document.querySelectorAll('#task1 li');
    for (let i = 0; i <all.length; i++) {
        if (all[i].checked == true) {
            allItems[i].classList.add('checked')
        }
    }
}
function sortActive() {
    // to add active items to the active array
    var fit
    fit = all.filter(el => el.checked == false)
    active = fit
    count();
}
function sortComplete() {
    //to add completed items to the complete array
    var com
    com = all.filter(el => el.checked == true)
    complete = com
    // console.log('complete', complete);
}
function completeToActive() {
    const items = document.querySelectorAll('#task3 li')
    for (let i = 0; i < complete.length; i++) {
        if (items[i].classList.contains('checked') == true) {
            complete[i].checked = true;
        }  else {
            complete[i].checked = false
            complete.splice(i,1);
            console.log(complete.splice());
        }  
    }
}