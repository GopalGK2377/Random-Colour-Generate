
function getRandomColor() {

    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function setColor() {
    const colorBox = document.getElementById('color-box');
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
}


document.getElementById('generate-btn').addEventListener('click', setColor);
