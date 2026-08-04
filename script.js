const gridContainer = document.querySelector('#grid-container');


for (let i = 0; i <= 15; i++) {
    const column = document.createElement('div');
    column.style.display = 'flex';
    column.style.flexDirection = 'column';
    column.style.gap = '0.2rem';

    for (let i = 0; i <= 15; i++) {
        const box = document.createElement('div');

        box.style.width = '20px';
        box.style.height = '20px';
        box.style.backgroundColor = '#333';

        column.appendChild(box);
    }

    gridContainer.appendChild(column);
}


gridContainer.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'DIV' && event.target !== gridContainer) {
        event.target.style.backgroundColor = '#f4f4f4';
    }
});