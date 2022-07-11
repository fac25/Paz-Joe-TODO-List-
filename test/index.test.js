test("Is the todo item being added correctly ?", () => {
  // get inputs
  const input = document.querySelector("input")
  // enter test data into inputs
  const inputs = [
    "",
    "Don't forget the milk",
    "Call the plumber at 07783978122",
    "Go part@£$ª¶YY",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum nisi augue, vitae convallis nisl aliquet ut. Suspendisse lacinia felis eget metus hendrerit mollis. Aenean tempus felis quis nibh viverra pulvinar. Quisque rutrum malesuada faucibus. Maecenas quis dictum quam. Sed ante magna, ultrices non mi vitae, convallis pellentesque magna. Maecenas venenatis auctor pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque luctus ultrices fermentum.",
  ]

  inputs.forEach((element) => {
    input.value = element
    const submitButton = document.querySelector("button[type='submit']")

    //addNewTodoItem() function is being invoked
    submitButton.click()

    const result = document.querySelectorAll("label")
    const lastchild = result[result.length - 1]
    // console.log(input.value.length);
    if (lastchild != null) {
      const actual = lastchild.textContent
      equal(actual, element)
    }
  })
})

/////////////////////////////////////////////////

//TEST FOR CHECKBOXES - checkItemsOffList()

//////////////////////////////////////////////////

test("Checking an entry marks it as complete", () => {
  const checkboxes = document.querySelectorAll(".toggle")

  checkboxes.forEach((ele) => {
    ele.click()
    const actual = ele.parentElement.classList.contains("checked")
    const expected = true

    equal(actual, expected)
  })
})

/////////////////////////////////////////////////

//TEST FOR DELETE - deleteItemsOffList(event)

//////////////////////////////////////////////////

test("Deleting the first entry removes it from the list", () => {
  const destroy = document.querySelector(".destroy")

  destroy.click()

  const actual = destroy.parentNode.parentNode.remove()
  const expected = undefined

  equal(actual, expected)
})

///////////////////////////////////////////////////////////////

// test("Delete button removes task from list of four tasks", () => {
//   //selects all tasks in list
//   const allTasks = document.querySelectorAll(".destroy")
//   console.log(allTasks)

//   // all length are length 4
//   // com pair the length of all tasks

//   // allTasks.forEach((deleteBtn) => {
//   //   deleteBtn.click()

//   //   const actual = deleteBtn.parentNode.parentNode.remove()
//   //   const expected = undefined

//   //   equal(actual, expected)
//   // })
// })

///////////////////////////////////////////////////////////////

// test("Deleting all entry removes all items from list", () => {
//   const destroy = document.querySelectorAll(".destroy")

//   destroy.forEach((deleteBtn) => {
//     deleteBtn.click()

//     const actual = deleteBtn.parentNode.parentNode.remove()
//     const expected = undefined

//     equal(actual, expected)
//   })
// })
