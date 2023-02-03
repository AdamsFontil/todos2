import {showTasks} from './showTasks'

const list = document.querySelector('.list')
const todosHeader = document.querySelector('.todosHeader')
const todos = document.querySelector('.todos')


export let buttons = () => {
const week = document.querySelector('.week')
week.addEventListener('click', () => {
  showTasks()
})
const home = document.querySelector('.home')
home.addEventListener('click', () => {
    showTasks()
  todosHeader.textContent = 'Home'
  todos.appendChild(todosHeader)

})
 // this is the model I want when refactoring to reduce code lines by alot
const month = document.querySelector('.month')
month.addEventListener('click', () => {
  showTasks()
})
const today = document.querySelector('.today')
today.addEventListener('click', () => {
  showTasks()
})
//checkbox section

// const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('change', function() {
//     const parentDiv = checkbox.closest('div');
//     console.log('checkbox')
//     if (checkbox.checked) {
//       console.log('Checkbox is checked');
//       console.log(parentDiv)
//       parentDiv.className = 'strikethrough'
//     } else {
//       console.log('Checkbox is not checked');
//       console.log(parentDiv)
//       parentDiv.className = 'todo'
//     }
//   });
// });

// deleteBtn section

// const deleteBtns = document.querySelectorAll('.deleteBtn');
// deleteBtns.forEach(deleteBtn => {
//   deleteBtn.addEventListener('click', function() {
//     console.log('deletebtn')

//     const parentDiv = deleteBtn.parentElement;
//     const secondChildDiv = parentDiv.getElementsByTagName('div')[0];
//    console.log(parentDiv)
//     console.log(todoItems)
//     console.log(secondChildDiv.textContent)
//     const match = todoItems.find(obj => obj.title === secondChildDiv.textContent);
//     if (match) {
//       console.log(match)
//       console.log(todoItems)
//       todoItems.splice(match, 1);
//       console.log(todoItems)
//       showTasksOnPage()
//     } else {
//       console.log(`No match found for ${secondChildDiv.textContent}`);
//     }
//   });
// });

// //editBtn section
// const editBtns = document.querySelectorAll('.editBtn');

// editBtns.forEach(editBtn => {
//   editBtn.addEventListener('click', function() {
//     const parentDiv = editBtn.parentElement
//     console.log('editBtn')
//       console.log(parentDiv)



//   });
// });



}


let deleteTask = () => {
    console.log('deletetask')
    const deleteBtns = document.querySelectorAll('.deleteBtn');
    deleteBtns.forEach(deleteBtn => {
      deleteBtn.addEventListener('click', function() {
        const parentDiv = deleteBtn.parentNode;
      parentDiv.parentNode.removeChild(parentDiv);


      //   const parentDiv = deleteBtn.parentElement;
      //   const secondChildDiv = parentDiv.getElementsByTagName('div')[0];
      // //  console.log(parentDiv)
      // //   console.log(todoItems)
      // //   console.log(secondChildDiv.textContent)
      //   const match = todoItems.find(obj => obj.title === secondChildDiv.textContent);
      //   if (match) {
      //     // console.log(match)
      //     // console.log(todoItems)
      //     // todoItems.splice(match, 1);
      //     // console.log(todoItems)
      //     parentDiv.className = 'changeBackground'


      //   } else {
      //     console.log(`No match found for ${secondChildDiv.textContent}`);
      //   }
        // if (parentDiv.className === 'changeBackground') {
        //   const todo = document.querySelector('.todo')
        //   const target = document.querySelector('.changeBackground')
        //   // console.log({parentDiv})
        //   // console.log({target})
        //   // console.log({todos})
        //   // console.log({list})
        //   // console.log({list.node})
        //   todo.remove(parentDiv)
        // }
      });
    });
}
