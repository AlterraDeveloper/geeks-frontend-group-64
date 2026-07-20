// function getMedal(place) {
//   if (place === 1) {
//     return "gold";
//   } else if (place === 2) {
//     return "silver";
//   } else if (place === 3) {
//     return "bronze";
//   } else {
//     return "?";
//   }
// }

// function getMedal2(place) {
//   if (place === 1) return "gold";

//   if (place === 2) return "silver";

//   if (place === 3) return "bronze";

//   return "?";
// }

// DOM - Document Object Model

const tagP = document.getElementById("text");

tagP.textContent = "Hello";
tagP.style.color = "blue";

const redBtn = document.getElementById("red-btn");

function redClick() {
  clear();
  tagP.textContent = "stop";
  tagP.style.color = "red";
  redBtn.style.backgroundColor = "red";
  redBtn.style.boxShadow = "red 0px 0px 12px 4px";
}

redBtn.addEventListener("click", redClick);

const yellowBtn = document.getElementById("yellow-btn");

function yellowClick() {
  clear();
  tagP.textContent = "wait";
  tagP.style.color = "yellow";
  yellowBtn.style.backgroundColor = "yellow";
  yellowBtn.style.boxShadow = "yellow 0px 0px 12px 4px";
}

yellowBtn.onclick = yellowClick;

const greenBtn = document.getElementById("green-btn");

function greenClick() {
  clear();
  tagP.textContent = "move";
  tagP.style.color = "green";
  greenBtn.style.backgroundColor = "green";
  greenBtn.style.boxShadow = "green 0px 0px 12px 4px";
}

greenBtn.onclick = greenClick;

function clear() {
  redBtn.style.backgroundColor = "#777";
  redBtn.style.boxShadow = "none";
  
  yellowBtn.style.backgroundColor = "#777";
  yellowBtn.style.boxShadow = "none";

  greenBtn.style.backgroundColor = "#777";
  greenBtn.style.boxShadow = "none";
}
