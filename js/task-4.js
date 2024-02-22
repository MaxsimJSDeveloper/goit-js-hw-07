'use strict';
const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const email = elements.email;
  const password = elements.password;

  if (email.value === '' || password.value === '') {
    return alert('All form fields must be filled in');
  }

  const userDetails = {
    email: email.value,
    password: password.value,
  };

  console.log(userDetails);
  event.currentTarget.reset();
}
