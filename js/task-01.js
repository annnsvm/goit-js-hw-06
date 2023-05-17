const listEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${listEl.length}`);

const categoryName = document.querySelectorAll("h2");

categoryName.forEach((el) => {
  console.log("Category:", el.textContent);
  console.log("Elements:", el.nextElementSibling.children.length);
});
