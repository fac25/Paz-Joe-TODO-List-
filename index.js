//GRABS ELEMENTS FROM DOM
const userInput = document.getElementById("user-input")
const submitBtn = document.getElementById("submit-btn")
const newTodo = document.getElementById("todo")

//EVENTLISTENER(S)
submitBtn.addEventListener("click", addNewTodoItem)

/////////////////////////////////////////////////

//ADD NEW TODO LIST ITEM FUNCTION

//////////////////////////////////////////////////

function addNewTodoItem() {
  const newTodoItem = userInput.value
  // const newListElement = document.createElement("li");
  // newListElement.innerHTML = newTodoItem;
  // newListElement.classList.add("new_todo_item");
  // newTodo.appendChild(newListElement);

  // // Create checkbox
  // const checkbox = document.createElement("input");
  // checkbox.setAttribute("type", "checkbox");
  // checkbox.setAttribute("checked", "");
  // checkbox.classList.add("toggle");
  // newListElement.appendChild(checkbox);

  const todo = document.createElement("li")

  // if (todo) {
  //   todo.addEventListener("change", checkItemsOffList)
  // }

  todo.classList = "new_todo_item"
  const todoContent = `<div class="view">
  <input class="toggle" type="checkbox">
  <label>${newTodoItem}</label>
  <button class="destroy"></button>
</div>`
  todo.innerHTML = todoContent
  newTodo.appendChild(todo)

  const toggle = document.querySelector(".toggle")
  toggle.addEventListener("change", checkItemsOffList)
}

/////////////////////////////////////////////////

//CHECK ITEMS OFF TODO LIST FUNCTION

//////////////////////////////////////////////////

function checkItemsOffList(event) {
  // for (let i = 0; i < todo.length; i++) {
  //   console.log(todo[i])
  // }

  if (event.target.checked === true) {
    console.log("hiiii")
    let parentDiv = event.target.parentNode
    parentDiv.classList.add("checked")
  }

  if (event.target.checked === false) {
    console.log("Not checked")
    todo.style.textDecoration = "none"
  }
}
