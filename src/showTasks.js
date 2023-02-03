import {todoItems} from './index'

const list = document.querySelector('.list')
const todosHeader = document.querySelector('.todosHeader')
const todos = document.querySelector('.todos')



export let showTasks = () => {
console.log('showTask')
  list.textContent = ''




    // todosHeader.textContent = 'test'
    // todos.appendChild(todosHeader)
    let myArray = todoItems
myArray.forEach(function(item, index) {
  // console.log(item.title);
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  // checkBox.name = 'group_name';
  // checkBox.value = 'radio_value';

const title = document.createElement('div');
title.textContent = item.title;
title.class = 'title'
const date = document.createElement('div');
date.textContent = item.dueDate;
const editBtn = document.createElement('div');
editBtn.className = 'editBtn'

editBtn.textContent = 'edit';
const deleteBtn = document.createElement('div');
deleteBtn.className = 'deleteBtn'
deleteBtn.textContent = 'X';
// checkBox.checked = false;
const list = document.querySelector('.list')
const todo = document.createElement('div')
todo.className = 'todo'

  todo.appendChild(checkBox)
  todo.appendChild(title)
  todo.appendChild(date)
  todo.appendChild(editBtn)
  todo.appendChild(deleteBtn)
  list.appendChild(todo)

  strikethrough()
  editTask()
  deleteTask()




});
}


// test()
// console.log(test)

let strikethrough = () => {
  console.log('strike')
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const parentDiv = checkbox.closest('div');
      console.log('checkbox')
      if (checkbox.checked) {
        console.log('Checkbox is checked');
        console.log(parentDiv)
        parentDiv.className = 'strikethrough'
      } else {
        console.log('Checkbox is not checked');
        console.log(parentDiv)
        parentDiv.className = 'todo'
      }
    });
  });
}

let editTask = () => {
  console.log('edittask')
  const editBtns = document.querySelectorAll('.editBtn');

  editBtns.forEach(editBtn => {
    editBtn.addEventListener('click', function() {
      const parentDiv = editBtn.parentElement
      console.log('editBtn')
      editBtn = 1;
      showForm()
        console.log(parentDiv)
    });
  });

}

let deleteTask = () => {
  console.log('deletetask')
  const deleteBtns = document.querySelectorAll('.deleteBtn');
  deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', function() {
      const parentDiv = deleteBtn.parentNode;
    parentDiv.parentNode.removeChild(parentDiv);


      // const parentDiv = deleteBtn.parentElement;
      const secondChildDiv = parentDiv.getElementsByTagName('div')[0];
    //  console.log(parentDiv)
    //   console.log(todoItems)
    //   console.log(secondChildDiv.textContent)
      const match = todoItems.find(obj => obj.title === secondChildDiv.textContent);
      if (match) {
        console.log(match)
        console.log(todoItems)
        todoItems.splice(match, 1);
        console.log(todoItems)
      } else {
        console.log(`No match found for ${secondChildDiv.textContent}`);
      }
    });
  });

}

// const button = document.querySelector(".changeBackground");
// button.addEventListener("click", function() {
//   const parentDiv = button.parentNode;
//   parentDiv.parentNode.removeChild(parentDiv);
// });
