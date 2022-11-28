// the project consists of displaying the key pressed on the keyboard
// let's start by creating a variable to store the key pressed
let key = document.getElementById("key");
let keyCode = document.getElementById("keyCode");
// now we need to create an event listener to listen for the key pressed
document.addEventListener("keydown", function (event) {
  // now we need to display the key and its ascii code
  key.innerHTML = `<h1 style="color: green">${event.key}</h1>`;
  keyCode.innerHTML = `<h2 style="color: red">${event.keyCode}</h2>`;
});
// now
