const params = new URL(location.href).searchParams;

const email = params.get('email');

if (email) document.querySelector('#email').value = email;
