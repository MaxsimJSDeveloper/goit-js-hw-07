'use strict';
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
  document.body.style.backgroundColor = color;
  span.innerText = color;
  console.log(color);
}
