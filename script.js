const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearButton');
const eraserButton = document.getElementById('eraserButton');
const sizeSelector = document.getElementById('sizeSelector');
let isDrawing = false;
let isErasing = false;

function createGrid(size) {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${size}, 20px)`;
    grid.style.gridTemplateRows = `repeat(${size}, 20px)`;
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}

grid.addEventListener('mousedown', () => { isDrawing = true; });
grid.addEventListener('mouseup', () => { isDrawing = false; });
grid.addEventListener('mouseleave', () => { isDrawing = false; });

grid.addEventListener('mouseover', (e) => {
    if (isDrawing && e.target.classList.contains('cell')) {
        e.target.style.backgroundColor = isErasing ? '' : colorPicker.value;
    }
});

eraserButton.addEventListener('click', () => {
    isErasing = !isErasing;
    eraserButton.classList.toggle('active', isErasing);
});

clearButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = '');
});

sizeSelector.addEventListener('change', (e) => {
    createGrid(e.target.value);
});

createGrid(16);