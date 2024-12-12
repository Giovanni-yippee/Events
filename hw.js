let box = document.getElementById('box');

box.addEventListener('mouseenter', function() {
    box.textContent = 'Сіздің мышкаңыз қораптың ішінде!';
});

box.addEventListener('mouseleave', function() {
    box.textContent = 'Сіздің мышкаңыз қораптан шығып кетті!';
});

let zhasylButton = document.getElementById('zhasylButton');

zhasylButton.addEventListener('click', function() {
    box.style.backgroundColor = 'green';
});

let uzyndygyButton = document.getElementById('uzyndygyButton');

uzyndygyButton.addEventListener('click', function() {
    let bastapqyWidth = parseInt(window.getComputedStyle(box).width);
    box.style.width = (bastapqyWidth + 20) + 'px';
});

let byiktikButton = document.getElementById('byiktikButton');

byiktikButton.addEventListener('click', function() {
    let bastapqyHeight = parseInt(window.getComputedStyle(box).height);
    box.style.height = (bastapqyHeight + 20) + 'px';
});