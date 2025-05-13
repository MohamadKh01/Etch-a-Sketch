const tops = document.querySelector(".top");
const grid = document.querySelector(".grid");

const sizeBtn = document.createElement("button");
const resetBtn = document.createElement("button");

let size = 16;
let flag = false;

grid.addEventListener("click", ()=> {if(flag == true){flag = false;} else {flag = true;}});

sizeBtn.textContent = "grid size";
sizeBtn.style.fontSize = "25px";
sizeBtn.style.margin = "3px";
sizeBtn.addEventListener("click", ()=> {do{size = prompt("enter grid size: ");} while(size < 2 || size > 50) loadGrid(size); flag = false;});

resetBtn.textContent = "reset";
resetBtn.style.fontSize = "25px";
resetBtn.style.margin = "3px";
resetBtn.addEventListener("click", ()=> {loadGrid(size); flag = false;});

tops.appendChild(sizeBtn);
tops.appendChild(resetBtn);

function loadGrid(size){

    grid.innerHTML = "";

    for(let i = 0; i < size; i++){

        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flex = "1"

        for(let j = 0; j < size; j++){
            const div = document.createElement("div");
            div.style.aspectRatio = "1 / 1";
            div.style.backgroundColor = "black";
            div.style.margin = "3px";
            div.style.flex = "1";

            div.addEventListener("mouseenter", ()=> {if(flag == true){div.style.backgroundColor = "aqua"}});

            row.appendChild(div);
        }

        grid.appendChild(row);
    }
}

loadGrid(size);