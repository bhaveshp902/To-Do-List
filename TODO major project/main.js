let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let dropdownlist = document.getElementById('dropdown');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    if(Option = "Most Important") {
        paragraph.classList.add('paragraph-styling1');}
    else if(Option = "Important"){
        paragraph.classList.add('paragraph-styling2');}
    else{
        paragraph.classList.add('paragraph-styling3');}
    


    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})

