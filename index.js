//GRABS ELEMENTS FROM DOM
const userInput = document.getElementById("user-input")
const submitBtn = document.getElementById("submit-btn")
const newTodo = document.getElementById("todo")

//EVENTLISTENER(S)
submitBtn.addEventListener("click", addNewTodoItem)

//EVENTLISTENER FOR ENTER KEY
userInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addNewTodoItem()
  }
})

/////////////////////////////////////////////////

//ADD NEW TODO LIST ITEM FUNCTION

//////////////////////////////////////////////////

function addNewTodoItem() {
  const newTodoItem = userInput.value
  userInput.value = ""

  const todo = document.createElement("li")

  todo.classList = "new_todo_item"
  const todoContent = `<div class="view">
  <input class="toggle" type="checkbox">
  <label>${newTodoItem}</label>
  <button class="destroy"></button>
</div>`
  todo.innerHTML = todoContent
  newTodo.appendChild(todo)

  // SELECT ALL CLASSES OF TOGGLE/DESTROY AND LOOP
  const toggle = document.querySelectorAll(".toggle")
  const destroy = document.querySelectorAll(".destroy")

  for (let i of toggle) {
    i.addEventListener("change", checkItemsOffList)
  }

  for (let i of destroy) {
    i.addEventListener("click", deleteItemsOffList)
  }
}

/////////////////////////////////////////////////

//CHECK ITEMS OFF TODO LIST FUNCTION

//////////////////////////////////////////////////

function checkItemsOffList(event) {
  if (event.target.checked) {
    let parentDiv = event.target.parentNode
    parentDiv.classList.add("checked")
  }

  if (event.target.checked === false) {
    let parentDiv = event.target.parentNode
    parentDiv.classList.remove("checked")
  }
}
function deleteItemsOffList(event) {
  console.log(event.target.parentNode)
  event.target.parentNode.parentNode.remove()
}
