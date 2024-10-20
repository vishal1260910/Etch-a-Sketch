const container = document.querySelector("#container");
 grid_size =prompt ("Enter grid size (Max 100)");
for(let i=0 ;i<grid_size**2; i++){
const grid = document.createElement("div");
grid.classList.add("innerGrid");
container.appendChild(grid);

}
const grids = document.querySelectorAll(".innerGrid"); //for selecting all elements with class innergrid
grids.forEach(grid =>{                                                //grids is a nodeList to apply to all nodes you must use forEach loop
  grid.style.width=(600/grid_size)-2 +"px" ;
  grid.style.height =(600/grid_size)-2 + "px" ;
})

                                                              
grids.forEach(grid => {                                           //for adding event listener to each grid in grids
  grid.addEventListener("mouseover", () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);  //choose a random colour
    grid.style.backgroundColor = randomColor;
  });
});

// Math.random()*16777215 this is like probabilty function that returns b/w 0 and 16777215
//you can use Math.floor(Math.random()*num)  and it will return any number betwenn 0 and num 

















// grid.textContent = "Hello";
