function colour() {
    this.style.background = "red";
    console.log(this);
}

function removeTransition() {
    this.style.background = "white";
}

function main() {
    const container = document.querySelector(".container");
    container.style.padding = "4px";
    container.style.color = "white";
    container.innerHTML = 'Etch-A-Sketch';
    container.style.background = "blue";

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
    //});
    pixels.forEach(pixel => pixel.addEventListener('mouseover', colour));
    pixels.forEach(pixel => pixel.addEventListener('transitionend', removeTransition));

}

main();
