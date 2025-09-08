const div3 = document.querySelector(".div3");
const div2 = document.querySelector(".div2");
const div1 = document.querySelector(".div1");

div1.addEventListener("click", () => {
  alert("div 1 clicked");
});

div2.addEventListener("click", () => {
  alert("div 2 clicked");
});

div3.addEventListener(
  "click",
  () => {
    alert("div 3  clicked");
  },
  true
);

// Event capturing

document.getElementById("parent").addEventListener(
  "click",
  function () {
    alert("Parent Div Clicked! (Capturing Phase)");
  },
  true
); // 'true' enables capturing phase

document.getElementById("child").addEventListener("click", function () {
  alert("Button Clicked!");
});

document.getElementById("menu").addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target.tagName === "LI") {
    // Check if clicked element is an <li>
    alert("You clicked: " + event.target.dataset.action);
  }
});
