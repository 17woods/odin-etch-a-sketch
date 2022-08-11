function create(n) {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    for (let i = 0; i < n; i++) {
        let row = document.createElement('div');
        row.style.background = "white";
        row.style.display = "flex";

        container.appendChild(row);
        for (let i = 0; i < n; i++) {
            let square = document.createElement('div');
            square.classList.add("pixel");
            square.style.background = 'white';
            square.style.display = "flex";
            square.style.height = `${512 / n}px`; // 512 is frame size
            square.style.width = `${512 / n}px`; // change value to change frame size

            row.appendChild(square);
        }
    }

    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener('mouseover', colour));
}

function colour() {
    this.style.background = "red";
    console.log(this);
}

function refresh() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => pixel.style.background = 'white');
}

function change() {
    while (true) {
        const n = parseInt(prompt("How many pixels along one axis?"));

        if (n > 128 || n < 1) {
            alert("Please enter a positive value less than or equal to 128");
            continue;
        } else {
            create(n);
            break;
        }
    }
}

function main() {
    const frame = document.querySelector(".frame");
    frame.innerHTML = "Etch-A-Sketch";
    frame.style.padding = "4px";

    const container = document.createElement("div");
    container.classList.add("container");
    frame.appendChild(container);
    container.style.padding = "4px";
    container.style.color = "white";
    container.style.background = "blue";
    container.style.width = "32em";

    create(16);

    const refreshBtn = document.querySelector(".refresh");
    refreshBtn.addEventListener("click", refresh);

    const changeBtn = document.querySelector(".change");
    changeBtn.addEventListener("click", change);
}

main();
