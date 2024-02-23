'use strict';
const controls = document.querySelector('#controls');
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');
const form = document.querySelector('.form');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createBtnEl.addEventListener('click', condition);

const alertMassage = document.createElement('p');
alertMassage.textContent = 'Please enter number from 1 to 100';

function condition() {
  if (
    Number(inputNumberEl.value) > Number(inputNumberEl.max) ||
    Number(inputNumberEl.value) < Number(inputNumberEl.min)
  ) {
    form.append(alertMassage);
    divBoxesEl.innerHTML = '';
  } else {
    divBoxesEl.innerHTML = '';
    createBoxes(inputNumberEl.value);
    alertMassage.remove();
  }
  inputNumberEl.value = '';
}

function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const div = `<div class="item" style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  divBoxesEl.insertAdjacentHTML('beforeend', boxesArr.join(''));
}

destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  inputNumberEl.value = '';
  divBoxesEl.innerHTML = '';
}
