//change button's position

const button = document.createElement("button");
button.className = "main-btn";
button.textContent = "Click me";
document.body.append(button);

button.addEventListener("mouseover", () => {
  if (Math.random() < 0.5) changeButtonPosition();
});

button.addEventListener("click", changeButtonPosition);

function changeButtonPosition() {
  const rightRandom = Math.random() * window.innerWidth;
  const topRandom = Math.random() * window.innerHeight;
  button.style.top = `${topRandom}px`;
  button.style.right = `${rightRandom}px`;
}
