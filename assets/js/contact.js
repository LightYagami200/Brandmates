function contactSubmit(event) {
  event.preventDefault();

  const nameField = document.querySelector('#name');
  const emailField = document.querySelector('#email');
  const messageField = document.querySelector('#message');
  const successMessage = document.querySelector('#form-title p');

  nameField.value = '';
  emailField.value = '';
  messageField.value = '';

  successMessage.style.setProperty('display', 'block');
}
