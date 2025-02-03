var inputContainers = document.querySelectorAll(".ring-container");
var inputs = document.querySelectorAll(".ring-content");
var icons = document.querySelectorAll("#search-icon");

// console.log("🚀 ~ inputContainer:", inputContainer);
// console.log("🚀 ~ input:", input);
// console.log("🚀 ~ icons:", icon);

inputs[0].addEventListener("focus", () => {
    inputContainers[0].style.outline = "rgb(57 145 245/.5) solid 3px";
    console.log("FOCUS");
});

inputs[0].addEventListener("blur", () => {
    inputContainers[0].style.outline = "transparent solid 3px";
});


