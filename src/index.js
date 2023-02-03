import './style.css';
import {showTasks} from './showTasks'
import {buttons} from './buttons'


export let todoItems = [];
let allProjects = [];

const todoFactory = ((title, description, dueDate, priority,project, notes,complete) => {
  title,
  description,
  dueDate,
  priority,
  project,
  notes,
  complete
  return {
      title,
      description,
      dueDate,
      priority,
      notes
  }
  })

export let sampleTasks = () => { //needs to be removed todoItems needs to be pushed by another functions. Or these are just samples
  console.log('test')

  const task1 = todoFactory ('trash', 'take it out', '9/2/2021', 'high', 'testing')
  const task2 = todoFactory ('eat', 'take it out', '9/3/2021', 'high', 'testing')
  const task3 = todoFactory ('sleep', 'take it out', '9/4/2021', 'high', 'testing')
  const task4 = todoFactory ('repeat', 'take it out', '9/5/2021', 'high', 'testing')
  const task5 = todoFactory ('run', 'take it out', '9/2/2021', 'high', 'testing')
  const task6 = todoFactory ('bog', 'take it out', '9/3/2021', 'high', 'testing')
  const task7 = todoFactory ('jog', 'take it out', '9/4/2021', 'high', 'testing')
  const task8 = todoFactory ('fog', 'take it out', '9/5/2021', 'high', 'testing')
  const task9 = todoFactory ('dog', 'take it out', '9/2/2021', 'high', 'testing')
  const task10 = todoFactory ('sod', 'take it out', '9/3/2021', 'high', 'testing')
  const task11 = todoFactory ('sock', 'take it out', '9/4/2021', 'high', 'testing')
  const task12 = todoFactory ('ret', 'take it out', '9/5/2021', 'high', 'testing')
  todoItems.push(task1, task2, task3, task4)
  todoItems.push(task5, task6, task7, task8)
  todoItems.push(task9, task10, task11, task12)
  console.log(todoItems)
}

sampleTasks()
showTasks()
buttons()
