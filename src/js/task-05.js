const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};
console.log(refs);

const onInputChange = event => {
  if (refs.input.value === '') {
    refs.span.innerHTML = 'Anonymous';
  } else {
    refs.span.innerHTML = event.currentTarget.value;
  }
};

refs.input.addEventListener('input', onInputChange);
