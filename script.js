const canvas_size = document.querySelector("#canvas-size");
const canvas_size_label = document.querySelector("output");

const gridbox = document.querySelector(".gridbox");

const clear_btn = document.querySelector(".clear-btn");
const erase_toggle = document.querySelector("#erase-toggle");
const randomize_toggle = document.querySelector("#randomize-toggle");
const color_selector = document.querySelector("#color-selector");

var pointerDown = false;

document.body.addEventListener('pointerdown', () => {
  pointerDown = true;
});

document.body.addEventListener('pointerup', () => {
  pointerDown = false;
});

canvas_size.addEventListener("input", () => {
    canvas_size_label.value = canvas_size.value;
    redraw_grid(canvas_size.value);
})

function redraw_grid() {
    let size = canvas_size.value;

    const grid_unit = "<div class='grid-unit'></div>"
    const row_unit = "<div class='grid-row'>" + grid_unit.repeat(size) + "</div>"
    gridbox.innerHTML = row_unit.repeat(size);
}

gridbox.addEventListener("pointerover", (e) => {
    if (e.target.classList.contains('grid-unit')) {
        if (pointerDown) {
            if (erase_toggle.checked) {
                e.target.style.backgroundColor = "#ffffff"
            } else if (randomize_toggle.checked) {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16); 
                e.target.style.backgroundColor = `#${randomColor.padStart(6, '0')}`;
            } else {
                e.target.style.backgroundColor = color_selector.value;
            }
        }
    }
}, true);
gridbox.addEventListener("pointerdown", (e) => {
    if (e.target.classList.contains('grid-unit')) {
        if (erase_toggle.checked) {
            e.target.style.backgroundColor = "#ffffff"
        } else if (randomize_toggle.checked) {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16); 
            e.target.style.backgroundColor = `#${randomColor.padStart(6, '0')}`;
        } else {
            e.target.style.backgroundColor = color_selector.value;
        }
    }
}, true);

clear_btn.addEventListener("click", (e) => {
    redraw_grid();
})

canvas_size.value = 32;
redraw_grid();