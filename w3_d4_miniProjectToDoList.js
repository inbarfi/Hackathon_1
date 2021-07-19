// https://www.youtube.com/watch?v=-pRg_daFjfk&ab_channel=learn-webdev

let addToDoButton = document.getElementById('addToDo');
// console.log(addToDoButton);
let toDoContainer = document.getElementById('toDoContainer');
// console.log(toDoContainer);
let InputField = document.getElementById('inputField');
// console.log(inputField);
addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = InputField.value;
    toDoContainer.appendChild(paragraph);
    InputField.value = "";
})