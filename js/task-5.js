const button = document.querySelector('.change-color');
const body = document.querySelector('body');

button.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
  body.style.backgroundColor = color;
  console.log(color);
}
