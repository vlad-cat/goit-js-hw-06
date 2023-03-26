const form = document.querySelector('.login-form');
const onFormSubmit = event => {
  event.preventDefault();

  const emailEl = event.currentTarget.email.value;
  const passwordEl = event.currentTarget.password.value;

  if (emailEl === '' || passwordEl === '') {
    return alert('You need to enter email and password!!!');
  } else {
    console.log('You have successfully registered)');
  }

  console.log({ email: emailEl, password: passwordEl });

  form.reset();
};

form.addEventListener('submit', onFormSubmit);
