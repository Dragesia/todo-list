import List from './lists';
import { createList } from './lists';
import Todo from './todos';
import { createTodo } from './todos';

const home = document.querySelector(".home");

const mainObj = new List("Main");
home.appendChild(createList(mainObj));

