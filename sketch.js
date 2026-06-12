const container = document.querySelector(".container")
const btn = document.querySelector("button")
function makeGrid(n){
    container.innerHTML = "";
    for (let row = 0; row < n; row++){
        for (let column = 0; column < n; column++){
            let div1 = document.createElement("div")
            div1.classList.add("grid")
            div1.style.background="pink";
            div1.style.width= `${960/n}px`;
            div1.style.height= `${960/n}px`;
            container.appendChild(div1);
        }
    }
}
container.addEventListener("mouseover" ,handleHover);
function handleHover(e){
    e.target.style.background = "red"
}
btn.addEventListener("click", function newGrid(f){
    makeGrid(16)
})