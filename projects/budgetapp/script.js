const budgetInput = document.querySelector('#budgetinput');
const budgetDisplay = document.querySelector('#budgetDisplay');
const expenseDisplay = document.querySelector('#expenseDisplay');
const balanceDisplay = document.querySelector('#balanceDisplay');
const expenseName = document.querySelector('#expenseName');
const expenseAmount = document.querySelector('#expenseAmount');
const tbody = document.querySelector('#tbodyy');


var titles = []
var expenses = []
var type
var index

function displayBudget() {
    budgetDisplay.innerHTML = budgetInput.value;
    // balanceDisplay.innerHTML = budgetDisplay.innerHTML - expenseDisplay.innerHTML;
    balance();
};
function balance() {
    var totalexpense = 0
    
    for (const expense of expenses) {
        totalexpense+= expense 
    
        console.log(totalexpense)
    }

    var budget = budgetInput.value;
    var expensess = totalexpense;

    var balance = budget - expensess;

    balanceDisplay.innerHTML = balance;
}

function displayExpenses() {
    var htmlCode = ""

    for (let i = 0; i < titles.length; i++) {
        htmlCode += `<tr>
        <td>${titles[i]}</td>
        <td>${expenses[i]}</td>
        <td><i class="far fa-edit" onclick=edit(${i})></i></td>
        <td><i class="far fa-minus-circle" onClick=del(${i})></i></td>
        </tr>`; 
    }

    tbody.innerHTML = htmlCode;
    
}

function edit(theIndex) {
    let i = theIndex;
    expenseName.value = titles[i];
    expenseAmount.value = expenses[i];
    type = 'edit';
    index = i;

    console.log(titles)
    balance()
}
    
function del(theIndex) {
    let i = theIndex;
    titles.splice(i,1);
    expenses.splice(i,1);
    displayExpenses()
    balance()
}
function addExpense() {
    var totalexpense = 0


    if (type == "edit") {
        const name = expenseName.value
        const amount = Number(expenseAmount.value)
        titles.splice(index, 1, name)
        expenses.splice(index,1, amount)
        displayExpenses()
    }else{
        expenses.push(Number(expenseAmount.value))
        titles.push(expenseName.value)
        displayExpenses()
    }
    
    for (const expense of expenses) {
        totalexpense+= expense 
    }
    document.getElementById("figure2").innerHTML= totalexpense

    balance()
    expenseName.value = " "
    expenseAmount.value = null;
};