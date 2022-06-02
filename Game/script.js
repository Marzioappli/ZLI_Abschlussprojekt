let quadrat = document.querySelector('.quadrat');
let moveBy = 10;
window.addEventListener('load', () => {
    quadrat.style.position = 'absolute';
    quadrat.style.left = 0;
    quadrat.style.top = 0;
});
window.addEventListener('keyup', (m) => {
    switch (m.key) {
        case 'ArrowLeft':
            quadrat.style.left = parseInt(quadrat.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            quadrat.style.left = parseInt(quadrat.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            quadrat.style.top = parseInt(quadrat.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            quadrat.style.top = parseInt(quadrat.style.top) + moveBy + 'px';
            break;
    }
});