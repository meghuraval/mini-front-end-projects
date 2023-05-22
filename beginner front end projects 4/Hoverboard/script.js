const container = document.getElementById("container");
const colors = [
  "#FFDDE2",
  "#EFD6D2",
  "#FF8CC6",
  "#DE369D",
  "#6F5E76",
  "#DEC5E3",
  "#CDEDFD",
  "#B6DCFE",
  "#A9F8FB",
  "#81F7E5",
];

const squares = 500;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
