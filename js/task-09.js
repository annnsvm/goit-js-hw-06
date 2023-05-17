const textColorEl = document.querySelector(".color");
const changeColorBtnEl = document.querySelector(".change-color");
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const changeColor = (event) => {
//   textColorEl.textContent = getRandomHexColor();
//   body.style.background = getRandomHexColor();
// };

const changeColor = (event) => {
  textColorEl.textContent = body.style.background = getRandomHexColor();
};

changeColorBtnEl.addEventListener("click", changeColor);
