const input = document.querySelector('#validation-input');
console.log(input);

const onInputBlur = event => {
  if (Number(input.dataset.length) === event.currentTarget.value.length) {
    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    }
  } else {
    input.classList.add('invalid');
    // input.classList.add('valid');
  }
};

input.addEventListener('blur', onInputBlur);
