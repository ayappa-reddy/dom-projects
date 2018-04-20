const task = document.querySelector('.task');
const form = task.querySelector('form');
let input = form.querySelector('input[type="text"]');

const tasks = document.querySelector(".tasks");
const list = tasks.querySelector("ul");
const clearBtn = tasks.querySelector("button");
let searchInput = tasks.querySelector('input[type="search"]');

let taskList;

const onLoadHandler = () => {
  input.value = '';
  searchInput.value = '';
  
  taskList = JSON.parse(localStorage.getItem("taskList")) || [];

  if (taskList.length > 0) {
    taskList.forEach(itemContent => {
      const listItem = document.createElement("li");
      listItem.textContent = itemContent;
      list.appendChild(listItem);
    });
  }
}



const formSubmitHandler = (e) => {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem('taskList')));  
  let inputVal = input.value.trim();
  if (inputVal) {
    const listItem = document.createElement('li');
    listItem.textContent = inputVal;
    list.appendChild(listItem);
    taskList.push(inputVal);
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }

  input.value = "";
};

const clearTasksHandler = () => {
  list.innerHTML = "";
  localStorage.clear();
};

const removeTaskHandler = (e) => {
  e.target.remove();
  taskList = taskList.filter((itemContent) => {
    return itemContent !== e.target.textContent;
  });

  localStorage.setItem('taskList', JSON.stringify(taskList));

};

const filterTaskHandler = (e) => {
  let searchedItem = e.target.value.toLowerCase();
  // Convert HTML collection to an Array and toggle hideItem.
  Array.from(e.target.nextElementSibling.children).forEach((listItem) => {
      if (listItem.textContent.toLowerCase().indexOf(searchedItem) > -1) {
        listItem.classList.remove('hideItem');
      } else {
        listItem.classList.add('hideItem');
      }
  });
};

window.addEventListener("load", onLoadHandler);
form.addEventListener("submit", formSubmitHandler);
clearBtn.addEventListener('click', clearTasksHandler);
list.addEventListener("click", removeTaskHandler);
searchInput.addEventListener("keyup", filterTaskHandler);
