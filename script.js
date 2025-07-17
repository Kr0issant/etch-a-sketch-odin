const canvas_size = document.querySelector("#canvas-size");
const canvas_size_label = document.querySelector("output");

const gridbox = document.querySelector(".gridbox");

const gridUnitStyle = document.createElement("style");
document.head.appendChild(gridUnitStyle);

canvas_size.addEventListener("input", () => {
    canvas_size_label.value = canvas_size.value;
    redraw_grid(canvas_size.value);
})

function redraw_grid() {
    let size = canvas_size.value;

    const grid_unit = "<div class='grid-unit'></div>"
    const row_unit = "<div class='grid-row'>" + grid_unit.repeat(size) + "</div>"
    gridbox.innerHTML = row_unit.repeat(size);

    const pixels = Math.floor(gridbox.offsetHeight/size);
    gridUnitStyle.innerHTML = `
.grid-unit {
    width: ${pixels}px;
    height: ${pixels}px;
}`
}

canvas_size.value = 16;
redraw_grid();