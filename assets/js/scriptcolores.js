let changecolor = document.getElementById(key);
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    key.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    key.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    key.style.backgroundColor = "skyblue";
  }
});

const creatediv = document.querySelector("body");

document.addEventListener("keydown", function (event2) {
  const key = document.createElement("div");

  key.style.width = "200px";
  key.style.height = "200px";

  if (event2.key === "q") {
    key.style.backgroundColor = "purple";
  } else if (event2.key === "w") {
    key.style.backgroundColor = "grey";
  } else if (event2.key === "e") {
    key.style.backgroundColor = "brown";
  } else {
    return;
  }

  creatediv.appendChild(key);
});
