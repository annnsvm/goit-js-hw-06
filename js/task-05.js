const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const userName = (event) => {
  output.textContent =
    input.value !== "" ? event.currentTarget.value : "Anonymous";
};

input.addEventListener("input", userName);
