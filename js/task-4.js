'use strict';
const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const userDetails = {
    email,
    password,
  };

  console.log(userDetails);
  event.currentTarget.reset();
}
