const inputEl = document.querySelector("#validation-input");
console.dir(inputEl);

function inputBorderOnBlur(event) {
  const inputLength = +inputEl.dataset.length;
  const inputValue = +inputEl.value.length;

  if (inputLength === inputValue) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}

inputEl.addEventListener("blur", inputBorderOnBlur);
