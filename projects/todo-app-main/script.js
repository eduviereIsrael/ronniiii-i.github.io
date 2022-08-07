var myNodelist = document.getElementsByTagName("LI");
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
    },500);
    console.log(all);
    console.log(complete);
    displayAll();
    // sortActive();
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
        },500);
        console.log(all);
        console.log(complete);
        displayAll();
        // sortActive();
        count();
    }
})
list.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI' || ev.target.tagName === 'P' || ev.target.tagName === 'LABEL') {
      ev.target.classList.toggle('checked');
      console.log('li');
      sortList();
      sortActive();
      sortComplete();
    }
    console.log(ev.target.tagName);
    updateSub();
    // console.log(active);
    sortActive();
    sortComplete();
}, false)
function updateSub() {
}
views[0].classList.add('view')
function displayAll() {
    var htmlCode = "";

    if (all.length !== 0) {
        for (let i = 0; i < all.length; i++) {
            htmlCode+= `
            <li>
                <div class="check">
                    <input type="checkbox" name="listItem" id="item${i}">
                    <label for="item${i}"></label>
                </div>
                <p class="itemdesc">${all[i].val}</p>
                <i class="fas fa-times"></i>
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

}
function displayActive() {
    var htmlCode = "";

    if (active.length !== 0) {
        for (let i = 0; i < active.length; i++) {
            htmlCode+= `
            <li>
                <div class="check">
                    <input type="checkbox" name="listItem" id="item${i}">
                    <label for="item${i}"></label>
                </div>
                <p class="itemdesc">${active[i].val}</p>
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
            <li>
                <div class="check">
                    <input type="checkbox" name="listItem" id="item${i}">
                    <label for="item${i}"></label>
                </div>
                <p class="itemdesc">${unique[i].val}</p>
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
function count() {
    countIt.innerHTML = active.length;
}
function sortList() {
    const items =document.querySelectorAll('li');
    for (let i = 0; i < all.length; i++) {
        if (items[i].classList.contains('checked') == true) {
            all[i].checked = true
        }        
    }
}
function sortActive() {
    // all.forEach(el => {
    //     if (el.checked == false) {
    //         active.push(el)
    //     }
    // })
}
function sortComplete() {
    all.forEach(el => {
        if (el.checked == true) {
            complete.push(el)
        }
    })
}
function crosscheck() {
}