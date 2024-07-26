const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {  // 16x16 = 256 squares
  const square = document.createElement("div");
  square.classList.add("square");

  // Add event listener for mouseover to change background color
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'lightblue'; // Change to any color you like
  });

  container.appendChild(square);
}
