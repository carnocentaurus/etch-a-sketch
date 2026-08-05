const gridContainer = document.querySelector('#grid-container');

const boxes = 100;


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
        box.style.height = 'calc(600px / 20)';
        box.style.backgroundColor = '#353839';

        column.appendChild(box);
    }

    gridContainer.appendChild(column);
}


gridContainer.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'SECTION' && 
        event.target !== gridContainer && 
        event.target !== 'DIV'
    ) {
        event.target.style.backgroundColor = '#808080';
    }
});