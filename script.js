const gridContainer = document.querySelector('#grid-container');


for (let i = 0; i <= 15; i++) {
    const column = document.createElement('div');
    column.style.display = 'flex';
    column.style.flexDirection = 'column';
    column.style.gap = '0.2rem';

    for (let i = 0; i <= 15; i++) {
        const box = document.createElement('section');

        box.style.width = '20px';
        box.style.height = '20px';
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