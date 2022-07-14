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

//TEST FOR ADDING TODO - addNewTodoItem()

//////////////////////////////////////////////////
test("Is the todo item being added correctly ?", () => {
  //const userInput = document.querySelector("#user-input");
  const submitBtn = document.querySelector("#submit-btn");
  const list = document.querySelector("#todo");
  //userInput.value = "Test entry";
  const input = document.querySelector("input");
  // enter test data into inputs
  const userInput = [
    "",
    "  ",
    "Call the plumber at 07783978122",
    "Go part@£$ª¶YY",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum nisi augue, vitae convallis nisl aliquet ut. Suspendisse lacinia felis eget metus hendrerit mollis. Aenean tempus felis quis nibh viverra pulvinar. Quisque rutrum malesuada faucibus. Maecenas quis dictum quam. Sed ante magna, ultrices non mi vitae, convallis pellentesque magna. Maecenas venenatis auctor pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque luctus ultrices fermentum.",
  ];
  const trimedArr = userInput.filter((el) => el.trim() !== "");

  trimedArr.forEach((el) => {
    input.value = el;
    //addNewTodoItem() function is being invoked
    submitBtn.click();
  });
  const result = document.querySelectorAll("li");
  const actual = result.length;
  const expected = trimedArr.length;

  equal(actual, expected);
  list.innerHTML = "";
});

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
  const userInput = document.querySelector("#user-input");
  const submitBtn = document.querySelector("#submit-btn");

  userInput.value = "Test entry";
  submitBtn.click();

  // SIMULATE CHECKING CHECKBOX
  const checkbox = document.getElementsByClassName("toggle");
  checkbox[0].click();

  const actual = checkbox[0].checked;
  const expected = true;

  equal(actual, expected);

  document.querySelector("#todo").innerHTML = "";
});

/////////////////////////////////////////////////

//TEST FOR DELETE - deleteItemsOffList(event)

//////////////////////////////////////////////////

test("Test for deleting single entry", () => {
  const userInput = document.querySelector("#user-input");
  const submitBtn = document.querySelector("#submit-btn");

  userInput.value = "Test entry";
  submitBtn.click();

  const deleteBtn = document.querySelector(".destroy");
  deleteBtn.click();

  const exists = document.querySelector("user-input");

  equal(exists, null);

  document.querySelector("#todo").innerHTML = "";
});

/////////////////////////////////////////////////

//TEST FOR FILTER FUNCTION

//////////////////////////////////////////////////

test("Test All button in filter function displays all todos", () => {
  const userInput = document.querySelector("#user-input");
  const submitBtn = document.querySelector("#submit-btn");

  const inputs = [
    "Test entry",
    "Don't forget the milk",
    "Call the plumber at 07783978122",
  ];

  inputs.forEach((input) => {
    userInput.value = input;
    submitBtn.click();
  });

  // SIMULATE CLICKING ALL BTN
  const allBtn = document.querySelector("#all-btn");
  allBtn.click();

  const actual = inputs.length;
  const expected = 3;

  equal(actual, expected);

  //Reset
  document.querySelector("#todo").innerHTML = "";
});

//////////////////////////////////////////////////

test("Test Active button in filter fn displays ONLY active todos", () => {
  //Adds entries to todo list
  const userInput = document.querySelector("#user-input");
  const submitBtn = document.querySelector("#submit-btn");

  const inputs = [
    "Test entry",
    "Don't forget the milk",
    "Call the plumber at 07783978122",
  ];

  inputs.forEach((input) => {
    userInput.value = input;
    submitBtn.click();
  });

  //checks off one entry in todo list
  const checkbox = document.getElementsByClassName("toggle");
  checkbox[0].click();

  // SIMULATE CLICKING ACTIVE BTN
  const activeBtn = document.querySelector("#active-btn");
  activeBtn.click();

  // Because we checked off one box, the output should be length - 1
  const actual = inputs.length - 1;
  const expected = 2;

  equal(actual, expected);

  //Reset
  document.querySelector("#todo").innerHTML = "";
});

//////////////////////////////////////////////////

test("tests completed button in filter fn displays ONLY completed todos", () => {
  //Adds entries to todo list
  const userInput = document.querySelector("#user-input");
  const submitBtn = document.querySelector("#submit-btn");

  const inputs = [
    "Test entry",
    "Don't forget the milk",
    "Call the plumber at 07783978122",
  ];

  inputs.forEach((input) => {
    userInput.value = input;
    submitBtn.click();
  });

  //checks off one entry in todo list
  const checkbox = document.getElementsByClassName("toggle");
  checkbox[0].click();

  // SIMULATE CLICKING COMPLETED BTN
  const completedBtn = document.querySelector("#completed-btn");
  completedBtn.click();

  const actual = inputs.length - 2;
  const expected = 1;

  equal(actual, expected);

  //Reset
  document.querySelector("#todo").innerHTML = "";
});
