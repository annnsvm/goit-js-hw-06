const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allIngredientsEl = document.querySelector("#ingredients");
console.log(allIngredientsEl);

const itemEl = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("ingredient");
  return item;
});

allIngredientsEl.append(...itemEl);
