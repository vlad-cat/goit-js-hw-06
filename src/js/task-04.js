const refs = {
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
  span: document.querySelector('#value'),
};

console.log(refs);

let couterValue = 0;

const decrementClick = () => {
  couterValue -= 1;
  refs.span.textContent = couterValue;
};

const incrementClick = () => {
  couterValue += 1;
  refs.span.textContent = couterValue;
};

refs.decrementButton.addEventListener('click', decrementClick);
refs.incrementButton.addEventListener('click', incrementClick);
