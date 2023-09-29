const cursor = document.querySelector('.cursor');

document.addEventListener('mousedown', () => {
    // Change cursor size on click
    cursor.style.width = '15px';
    cursor.style.height = '15px';
});

document.addEventListener('mouseup', () => {
    // Reset cursor size after releasing the mouse button
    cursor.style.width = '20px';
    cursor.style.height = '20px';
});

document.addEventListener('mousemove', (e) => {
    // Follow the mouse cursor
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
