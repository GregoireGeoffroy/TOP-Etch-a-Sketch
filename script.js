const container = document.querySelector("#container");
const setSizeButton = document.querySelector("#setSizeButton");

let currentSquaresPerSide = 16;

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function createGrid(squaresPerSide) {
  currentSquaresPerSide = squaresPerSide;
  container.innerHTML = '';

  const containerSize = Math.min(container.clientWidth, container.clientHeight);
  const squareSize = Math.floor(containerSize / squaresPerSide);

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = getRandomColor();
    });

    container.appendChild(square);
  }

  // Adjust container size to fit the grid exactly
  container.style.width = `${squareSize * squaresPerSide}px`;
  container.style.height = `${squareSize * squaresPerSide}px`;
}

setSizeButton.addEventListener("click", () => {
  const input = prompt("Enter the number of squares per side for the new grid (max 100):", currentSquaresPerSide.toString());
  const squaresPerSide = parseInt(input, 10); // Ensure input is treated as a base-10 number

  if (!isNaN(squaresPerSide) && squaresPerSide > 0 && squaresPerSide <= 100) {
    createGrid(squaresPerSide);
  } else {
    alert("Invalid input. Please enter a number between 1 and 100.");
  }
});

// Create the initial grid
createGrid(currentSquaresPerSide);

// Adjust grid size when window is resized
window.addEventListener("resize", () => {
  createGrid(currentSquaresPerSide);
});
