const button = document.querySelector('.btn'),
      playground = document.querySelector('.playground');

function moveButton() {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

button.addEventListener('mouseover', () => {
    if (Math.random() < 0.5) {
        moveButton();
    }
});

button.addEventListener('click', () => {
    moveButton();
});