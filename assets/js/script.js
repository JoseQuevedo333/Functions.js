// //2.1

element = document.getElementById("ele1");
element.addEventListener("click", function () {
  element.style.backgroundColor = "yellow";
});

// //2.2

function pintar(elem, color = "green") {
  elem.style.backgroundColor = color;
}

const elem = document.getElementById("ele2");
elem.addEventListener("click", function () {
  pintar(this, "yellow");
});
