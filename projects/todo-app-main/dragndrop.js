const dragArea1 = document.querySelector('#task1');
const dragArea2 = document.querySelector('#task2');
const dragArea3 = document.querySelector('#task3');

new Sortable(dragArea1, {
    animation: 350
})
new Sortable(dragArea2, {
    animation: 350
})
new Sortable(dragArea3, {
    animation: 350
})