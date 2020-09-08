generateColor();

document.querySelector("button").onclick = generateColor;

function generateColor() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  randomColor = randomColor.toUpperCase();

  document.body.style.backgroundColor = randomColor;

  var spanColor = document.querySelector("span");

  spanColor.textContent = randomColor;
}
