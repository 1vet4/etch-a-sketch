var colorInput=document.querySelector("#color");
const grid=document.querySelector(".grid-container");
const resetButton=document.querySelector(".reset");
var defaultColor=colorInput.value;
var r=document.querySelector(':root');
console.log(defaultColor)
createGrid = () =>{
    for(let i=1; i<257; i++){
        const div=document.createElement("div")
        div.classList.add("square");
        grid.appendChild(div)
    }
}
const square=document.querySelector("div")
console.log(square)
square.addEventListener("mouseover",function(e){
    e.target.classList.replace("square","color")
})

resetButton.addEventListener("click", function(){
    colorInput.value="#000000";
    grid.innerHTML=""
    
    createGrid();
})
colorInput.addEventListener("input", (e)=>{
    defaultColor=colorInput.value;
    r.style.setProperty('--color', defaultColor);
    
})
createGrid();