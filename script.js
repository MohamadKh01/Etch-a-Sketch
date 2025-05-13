const grid = document.querySelector("div");

for(let i = 0; i < 16; i++){

    const row = document.createElement("div");
    row.style.display = "flex";

    for(let j = 0; j < 16; j++){
        const div = document.createElement("div");
        div.style.width = "40px";
        div.style.aspectRatio = "1 / 1";
        div.style.backgroundColor = "black";
        div.style.margin = "3px";
        
        let flag = false;

        div.addEventListener("mouseenter", ()=> div.style.backgroundColor = "aqua");
        div.addEventListener("mouseout", ()=> div.style.backgroundColor = "black");

        row.appendChild(div);
    }

    grid.appendChild(row);
}