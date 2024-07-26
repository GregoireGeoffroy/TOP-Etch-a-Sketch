const container = document.querySelector("#container");

const square = document.createElement("div");
square.classList.add ("square");
square.style.border = "1px solid black"
square.style.padding = "16px"

for(i = 0; i < 16; i++) {
container.appendChild(square);
}