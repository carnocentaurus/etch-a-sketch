const boxesPerSide = document.querySelector('#boxes-per-side');
const generateGrid = document.querySelector('#generate-grid');
const gridContainer = document.querySelector('#grid-container');
const errorMessage = document.querySelector('#error-message');


generateGrid.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    errorMessage.textContent = '';

    const boxes = parseInt(boxesPerSide.value);

    if (isNaN(boxes)) {
        errorMessage.textContent = 'Enter a value';
        return;
    }
    if (boxes < 1) {
        errorMessage.textContent = 'Number of boxes per side can not be lower than 1';
        return;
    }
    if (boxes > 100) {
        errorMessage.textContent = 'Number of boxes per side can not be greater than 100';
        return;
    }

    for (let i = 1; i <= boxes; i++) {
        const column = document.createElement('div');
        column.style.display = 'flex';
        column.style.flexDirection = 'column';
        column.style.flexGrow = '1';
        column.style.gap = '1px';

        for (let i = 1; i <= boxes; i++) {
            const box = document.createElement('section');

            box.style.display = 'flex';
            box.style.flexGrow = '1;'
            box.style.width = 'auto';
            box.style.height = 'calc(600px / 1)';
            box.style.backgroundColor = '#353839';

            column.appendChild(box);
        }

        gridContainer.appendChild(column);
    }
});


gridContainer.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'SECTION' && 
        event.target !== gridContainer && 
        event.target !== 'DIV'
    ) 
    {
        const max = 255;
        const min = 0;

        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        event.target.style.backgroundColor = `rgb(${random} ${random} ${random})`;
    }
});