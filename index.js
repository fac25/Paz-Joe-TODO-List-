//GRABS ELEMENTS FROM DOM
const userInput = document.getElementById("user-input")
const submitBtn = document.getElementById("submit-btn")
const todoList = document.getElementById("todo")
//DOM ELE FOR FILTER FN
const allBtn = document.getElementById("all-btn")
const activeBtn = document.getElementById("active-btn")
const completedBtn = document.getElementById("completed-btn")

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

  // PREVENTS THE USER ENTERING AN EMPTY STRING
  if (newTodoItem.trim() === "") {
    return
  }

  const todo = document.createElement("li")
  todo.classList = "new_todo_item"

  const todoContent = `
  <div class="view">
    <input class="toggle" type="checkbox">
    <label>${newTodoItem}</label>
    <button class="destroy"></button>
  </div> `

  todo.innerHTML = todoContent
  todoList.appendChild(todo)

  // SELECT ALL CLASSES OF TOGGLE/DESTROY AND LOOP
  const toggle = document.querySelectorAll(".toggle")
  const destroy = document.querySelectorAll(".destroy")

  // These functions were adding a new event listener to all
  // the elements each time one was created
  // causing memory leak

  // for (let i of toggle) {
  //   i.addEventListener("change", checkItemsOffList)
  // }

  // for (let i of destroy) {
  //   i.addEventListener("click", deleteItemsOffList);
  // }
}

/////////////////////////////////////////////////
//
// ADD EVENT LISTENER TO EACH TODO
// using event delegation to prevent memory leak
// https://davidwalsh.name/event-delegate
//
//////////////////////////////////////////////////

// Get the element, add a click listener...
document.getElementById("todo").addEventListener("click", function (e) {
  // e.target is the clicked element!
  // If it is the checkbox
  if (e.target && e.target.matches(".toggle")) {
    checkItemsOffList(e)
  }
})
document.getElementById("todo").addEventListener("click", function (e) {
  // e.target is the clicked element!
  // If it is the delete button
  if (e.target && e.target.matches(".destroy")) {
    deleteItemsOffList(e)
  }
})

/////////////////////////////////////////////////
//
//CHECK ITEMS OFF TODO LIST FUNCTION
//
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

/////////////////////////////////////////////////

//DELETE ITEMS FROM TODO LIST FUNCTION

//////////////////////////////////////////////////

function deleteItemsOffList(event) {
  event.target.parentNode.parentNode.remove()
}

/////////////////////////////////////////////////

//FILTER ITEMS ON TODO LIST FUNCTION

//////////////////////////////////////////////////

const buttons = [
  { button: activeBtn, action: showActive },
  { button: allBtn, action: showAll },
  { button: completedBtn, action: showCompleted },
]

buttons.forEach((item) =>
  item.button.addEventListener("click", () => {
    for (let todo of todoList.children) {
      const checkbox = todo.querySelector(".toggle")
      //reset
      todo.classList.remove("hide")

      item.action(checkbox)
    }
  })
)

function showActive(checkbox) {
  if (checkbox.checked) {
    let parentDiv = checkbox.parentNode.parentNode
    parentDiv.classList.add("hide")
  }
}

function showAll(checkbox) {
  if (checkbox.checked) {
    let parentDiv = checkbox.parentNode.parentNode
    parentDiv.classList.remove("hide")
  }
}

function showCompleted(checkbox) {
  if (checkbox.checked === false) {
    let parentDiv = checkbox.parentNode.parentNode
    parentDiv.classList.add("hide")
  }
}
