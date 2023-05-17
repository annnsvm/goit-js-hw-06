const value = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

function onClickDecrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}
function onClickIncrement() {
  counterValue += 1;
  value.textContent = counterValue;
}

decrement.addEventListener("click", onClickDecrement);
increment.addEventListener("click", onClickIncrement);
