const inputEl = document.querySelector("#font-size-control");
console.dir(inputEl);

const textEl = document.querySelector("#text");

function fontSize(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}

inputEl.addEventListener("input", fontSize);
