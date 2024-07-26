const container = document.querySelector("#container");
const button = document.querySelector("#newGridButton");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(squaresPerSide) {
  // Clear the existing grid
  container.innerHTML = '';

  // Calculate the size of each square
  const squareSize = 960 / squaresPerSide;

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add event listener for mouseover to change background color to a random color
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = getRandomColor();
    });

    container.appendChild(square);
  }
}

// Add event listener to the button
button.addEventListener("click", () => {
  let squaresPerSide = prompt("Enter the number of squares per side for the new grid (maximum 100):");
  squaresPerSide = Math.min(Math.max(parseInt(squaresPerSide), 1), 100); // Ensure the input is between 1 and 100

  if (!isNaN(squaresPerSide)) {
    createGrid(squaresPerSide);
  } else {
    alert("Invalid input. Please enter a number between 1 and 100.");
  }
});

// Create the initial grid
createGrid(16);
