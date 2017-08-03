
const counter = (state, action) => {
  if (typeof state === 'undefined') return 0;

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = Redux.createStore(counter);
const valueEl = document.getElementById('value');

const render = () => valueEl.innerHTML = store.getState().toString();

render();

store.subscribe(render);

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch({
    type: 'INCREMENT',
  });
});

document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch({
    type: 'DECREMENT',
  });
});
