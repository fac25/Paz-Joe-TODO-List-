//GRABS ELEMENTS FROM DOM
const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const newTodo = document.getElementById("todo");

//EVENTLISTENER(S)
submitBtn.addEventListener("click", addNewTodoItem);

/////////////////////////////////////////////////

//ADD NEW TODO LIST ITEM FUNCTION

//////////////////////////////////////////////////

function addNewTodoItem() {
  const newTodoItem = userInput.value;

  const newListElement = document.createElement("li");
  newListElement.innerHTML = newTodoItem;
  newListElement.classList.add("new_todo_item");
  newTodo.appendChild(newListElement);
}
