// test("Is the todo item being added correctly ?", () => {
//   // get inputs
//   const input = document.querySelector("input")
//   // enter test data into inputs
//   const inputs = [
//     "",
//     "Don't forget the milk",
//     "Call the plumber at 07783978122",
//     "Go part@£$ª¶YY",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum nisi augue, vitae convallis nisl aliquet ut. Suspendisse lacinia felis eget metus hendrerit mollis. Aenean tempus felis quis nibh viverra pulvinar. Quisque rutrum malesuada faucibus. Maecenas quis dictum quam. Sed ante magna, ultrices non mi vitae, convallis pellentesque magna. Maecenas venenatis auctor pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque luctus ultrices fermentum.",
//   ]

//   inputs.forEach((element) => {
//     input.value = element
//     const submitButton = document.querySelector("button[type='submit']")

//     //addNewTodoItem() function is being invoked
//     submitButton.click()

//     const result = document.querySelectorAll("label")
//     const lastchild = result[result.length - 1]
//     // console.log(input.value.length);
//     if (lastchild != null) {
//       const actual = lastchild.textContent
//       equal(actual, element)
//     }
//   })
// })

/////////////////////////////////////////////////

//TEST FOR CHECKBOXES - checkItemsOffList()

//////////////////////////////////////////////////

// test("Checking an entry marks it as complete", () => {
//   const checkboxes = document.querySelectorAll(".toggle")

//   checkboxes.forEach((ele) => {
//     ele.click()
//     const actual = ele.parentElement.classList.contains("checked")
//     const expected = true

//     equal(actual, expected)
//   })
// })

test("Checking an entry marks it as complete", () => {
  const userInput = document.querySelector("#user-input")
  const submitBtn = document.querySelector("#submit-btn")

  userInput.value = "Test entry"
  submitBtn.click()

  // SIMULATE CHECKING CHECKBOX
  const checkbox = document.getElementsByClassName("toggle")
  checkbox[0].click()

  const actual = checkbox[0].checked
  const expected = true

  equal(actual, expected)

  document.querySelector("#todo").innerHTML = ""
})

/////////////////////////////////////////////////

//TEST FOR DELETE - deleteItemsOffList(event)

//////////////////////////////////////////////////

test("Test for deleting single entry", () => {
  const userInput = document.querySelector("#user-input")
  const submitBtn = document.querySelector("#submit-btn")

  userInput.value = "Test entry"
  submitBtn.click()

  const deleteBtn = document.querySelector(".destroy")
  deleteBtn.click()

  const exists = document.querySelector("user-input")

  equal(exists, null)

  document.querySelector("#todo").innerHTML = ""
})
