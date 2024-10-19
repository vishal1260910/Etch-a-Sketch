const container = document.querySelector("#container");

for(let i=0 ;i<256; i++){
const grid = document.createElement("div");
grid.classList.add("innerGrid");
container.appendChild(grid);

}
const grids = document.querySelectorAll(".innerGrid");



grids.forEach(grid => {
  grid.addEventListener("mouseover", () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    grid.style.backgroundColor = randomColor;
  });
});


















// grid.textContent = "Hello";
