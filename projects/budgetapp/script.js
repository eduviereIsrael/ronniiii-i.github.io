const budgetInput = document.querySelector('#budgetinput');
const budgetDisplay = document.querySelector('#budgetDisplay');
const expenseDisplay = document.querySelector('#expenseDisplay');
const balanceDisplay = document.querySelector('#balanceDisplay');
const expenseName = document.querySelector('#expenseName');
const expenseAmount = document.querySelector('#expenseAmount');

function displayBudget() {
    budgetDisplay.innerHTML = budgetInput.value;
};
function addExpense() {};