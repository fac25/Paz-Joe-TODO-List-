test("todo item is being added correctly", () => {
  // get all three inputs
  const input = document.querySelector("input");
  const list = document.querySelector("#todo");
  //const bInput = document.querySelector("input[name='b']");

  // enter test data into inputs
  const inputs = [
    "",
    "Don't forget the milk",
    "Call the plumber at 07783978122",
    "Go part@£$ª¶YY",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum nisi augue, vitae convallis nisl aliquet ut. Suspendisse lacinia felis eget metus hendrerit mollis. Aenean tempus felis quis nibh viverra pulvinar. Quisque rutrum malesuada faucibus. Maecenas quis dictum quam. Sed ante magna, ultrices non mi vitae, convallis pellentesque magna. Maecenas venenatis auctor pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque luctus ultrices fermentum.",
  ];
  inputs.forEach((element) => {
    input.value = element;
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.click();
    const result = document.querySelector("li:last-child");
    equal(result.textContent, element);
    result.textContent = "";
  });
});
