function colour() {
    this.style.background = "red";
    console.log(this);
}

function removeTransition() {
    this.style.background = "white";
}

function main() {
    const frame = document.querySelector(".frame");
    frame.innerHTML = "Etch-A-Sketch";
    frame.style.padding = "4px";

    const container = document.createElement("div");
    frame.appendChild(container);
    container.style.padding = "4px";
    container.style.color = "white";
    container.style.background = "blue";
    container.style.width = "20em";

    for (let i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.style.background = "white";
        row.style.display = "flex";

        container.appendChild(row);
        for (let i = 0; i < 16; i++) {
            let square = document.createElement('div');
            square.classList.add("pixel");
            square.style.background = 'white';
            square.style.display = "flex";
            square.style.margin = '2px';
            square.style.height = '16px';
            square.style.width = '16px';

            row.appendChild(square);
        }
    }

    const pixels = document.querySelectorAll(".pixel");

    //pixels.forEach(function(elem) {
        //elem.addEventListener("mouseover", colour);
    //}); is the same as
    pixels.forEach(pixel => pixel.addEventListener('mouseover', colour));
}

main();
