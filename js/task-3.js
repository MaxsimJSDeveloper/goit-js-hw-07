'use strict';
const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

const getInputValue = e => {
  if (e.currentTarget.value.trim() !== '') {
    nameRef.textContent = e.currentTarget.value.trim();
  } else {
    nameRef.textContent = 'Anonymous';
  }
};

inputRef.addEventListener('input', getInputValue);
