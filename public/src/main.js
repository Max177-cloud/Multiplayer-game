console.log("Hello World!");

const gameField = document.querySelector("#gameField");
const playerNode = document.querySelector("#player");

playerNode.style.top = "300px";
playerNode.style.left = "300px";

const objectConfigs = [
  { type: "tree", x: -80, y: -70 },
  { type: "rock", x: 70, y: -90 },
  { type: "bush", x: -120, y: 70 },
  { type: "tree", x: 120, y: 80 },
  { type: "rock", x: 80, y: 130 },
  { type: "bush", x: -90, y: -150 }
];

function createObject({ type, x, y }) {
  const objectNode = document.createElement("div");
  objectNode.className = `object ${type}`;
  objectNode.style.left = `${playerNode.offsetLeft + x}px`;
  objectNode.style.top = `${playerNode.offsetTop + y}px`;
  gameField.appendChild(objectNode);
}

objectConfigs.forEach(createObject);

window.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "ArrowUp") {
    playerNode.style.top = (parseInt(playerNode.style.top) || 0) - 10 + "px";
  }
  if (event.key === "ArrowDown") {
    playerNode.style.top = (parseInt(playerNode.style.top) || 0) + 10 + "px";
  }
  if (event.key === "ArrowLeft") {
    playerNode.style.left = (parseInt(playerNode.style.left) || 0) - 10 + "px";
  }
  if (event.key === "ArrowRight") {
    playerNode.style.left = (parseInt(playerNode.style.left) || 0) + 10 + "px";
  }
});