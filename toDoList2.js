document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);


// Event Handlers
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '') 
        addToDo(input.value);
        input.value = '';
}

function handleClickDeleteOrCheck(e){
    if(e.target.name =='checkButton') 
        checkTodo(e);
        // green(e);
    
    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}


function handleClearAll(e){
    document.querySelector('ul').innerHTML='';
}

//Helpers
function addToDo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
li.innerHTML = `
    <span class="todo-item">${todo}</span>
    <button name="checkButton"><i id="done" class="fas fa-check-square"></i></button>
    <button name="deleteButton"><i class="fas fa-trash"></i></button>
`;

    li.classList.add('todo-list-item');
    ul.appendChild(li);
}


function checkTodo(e){
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
        // text-decoration-color: 'red'; //how to change its color?
}

// function green(e){
//     let icon = document.getElementById('done');
//     icon.classList.toggle('green'); 
// }



function deleteTodo(e) { 
    let item = e.target.parentNode;
    item.addEventListener('transitionend', function(){
        item.remove();
    })
    item.classList.add('todo-list-item-fall');
}

// on image click - enlarge image
let rightDiv = document.getElementsByClassName('rightDiv')[0];
// console.log(rightDiv);


// let img = document.getElementsByClassName('img')[0];
// img.addEventListener('click', enlargeImg); //html

function enlargeImg(img){
   if(img.width < 300){
    // console.log('hello');
    img.style.height = '780px';
    img.style.width = '440px';
   } else {
    img.style.height = '400px';
    img.style.width = '230px';
   }
}

function remove(img){
    img.style.display = 'none';
}


// insert imgages onclick buttons

function insert(e) {
    let arrayHealth = ['health1.jpg', 'health2.jpg', 'health3.jpg', 'health4.jpg', 'health5.jpg', 'health6.jpg', 'health7.jpg', 'health8.jpg', 'health9.jpg', 'health10.jpg']
    let arrayLearning = ['learning1.jpg', 'learning2.jpg', 'learning3.jpg', 'learning4.jpg', 'learning5.jpg', 'learning6.jpg', 'learning7.jpg', 'learning8.jpg', 'learning9.jpg', 'learning10.jpg']
    let arrayRelations = ['relation1.jpg', 'relation2.jpg', 'relation3.jpg', 'relation4.jpg', 'relation5.jpg', 'relation5.jpg', 'relation6.jpg', 'relation7.jpg', 'relation8.jpg', 'relation9.jpg', 'relation10.jpg']
    let arraySport = ['sport1.jpg', 'sport2.jpg', 'sport3.jpg', 'sport4.jpg', 'sport5.jpg', 'sport6.jpg']
    let arraySuccess = ['success1.jpg', 'success2.jpg', 'success3.jpg', 'success4.jpg', 'success5.jpg', 'success6.jpg', 'success7.jpg', 'success8.jpg', 'success9.jpg', 'success10.jpg']
    let arrayWork = ['work1.jpg', 'work2.jpg', 'work3.jpg', 'work4.jpg', 'work5.jpg', 'work6.jpg', 'work7.jpg', 'work8.jpg', 'work9.jpg', 'work10.jpg']
    
    let currentCategory = e.name
    let array //setting a global variable

    // console.log(currentCategory);
    if(currentCategory=="health"){
        array = arrayHealth
    }
    if(currentCategory=="learning"){
        array = arrayLearning
    }
    if(currentCategory=="relations"){
        array = arrayWork
    }
    if(currentCategory=="sport"){
        array = arraySport
    }
    if(currentCategory=="success"){
        array = arraySuccess
    }
    if(currentCategory=="work"){
        array = arrayWork
    }

//     if(document.getElementsByClassName("imgContainer")[0].contains()) {

// // delete


//     } else {

    for (let i=0; i < array.length; i++) {
        var img = document.createElement("img");
        img.src = array[i];
        img.height = 400;
        img.width = 230;
        var class_name = `img ${currentCategory}`;
        img.setAttribute("class", class_name);
        let imgContainer = document.getElementsByClassName("imgContainer")[0];
        console.log(imgContainer);
      
        // set onclick 
        img.addEventListener('click', function(){ 
            enlargeImg(this)
          });
        // on dbclick
        img.addEventListener('dblclick', function(){ 
            remove(this);
          });
        imgContainer.appendChild(img);
        console.log(img);
        }



    //close else:
    // }
    
}





// function insertHealth() {
//     let arrayHealth = ['health1.jpg', 'health2.jpg', 'health3.jpg']
//     for (let i=0; i<arrayHealth.length; i++) {
//         var img = document.createElement("img");
//         img.src = arrayHealth[i];
//         img.height = 400;
//         img.width = 230;
//         var class_name = "img health";
//         img.setAttribute("class", class_name);
//         let imgContainer = document.getElementsByClassName("imgContainer")[0];
//         console.log(imgContainer);
      
//         // set onclick 
//         // set on dbclick
//         img.addEventListener('dblclick', function(){ 
//             remove(this);
//           });
//         imgContainer.appendChild(img);
//         console.log(img);

      

//     }
// };


























    // if (img.style.width == 230)) {
        // img.style.height = '600px';
        // img.style.width = '400px';
    // } else {
    //     img.style.height = '400px';
    //     img.style.width = '230px';
    // }


// let quoteButtons = document.getElementsByClassName('quoteButton')[0];
// console.log("object name", quoteButtons)
// quoteButtons.addEventListener('click', displayQuotes);




// function displayQuotes(e) {
//     var imgHealth = document.createElement('img');
//     img.src = 'general1.jpg';
//     document.getElementsByClassName('rightDiv').appendChild(imgHealth);
//     // down.innerHTML = "Image Element Added."; 
// } 


    // if (classList.contains(health)) {
    //     const img = document.createElement("img");
    //     img.src = "health.jpg";
    //     document.rightDiv.appendChild(img);
    // }



// var a;
// function displayQuotes() {
//     if(a==1) {
//         document.getElementsByClassName("health").style.display="inline";
//         return a = 0;
//     } else {
//         document.getElementsByClassName("health").style.display="none";
//         return a=1;
//     }
// }




// var a;
// function insertHealth() {
//     if(a==1) {
//         document.getElementsByClassName("health").style.display="inline";
//         return a = 0;
//     } else {
//         document.getElementsByClassName("health").style.display="none";
//         return a=1;
//     }
// }

