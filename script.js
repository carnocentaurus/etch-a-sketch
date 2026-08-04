const gridContainer = document.querySelector('#grid-container');

for (let i = 0; i <= 15; i++) {
    const box = document.createElement('div');

    box.style.width = '100px';
    box.style.height = '100px';
    box.style.backgroundColor = '#333';

    gridContainer.appendChild(box);
}