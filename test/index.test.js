test("Is the todo item being added correctly ?", () => {
  // get inputs
  const input = document.querySelector("input")
  const list = document.querySelector("#todo")

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

    if (input.value.length > 0) {
      equal(lastchild.textContent, element)
    }
  })
  // list.textContent = "";
})

/////////////////////////////////////////////////

//TEST FOR CHECKBOXES

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
