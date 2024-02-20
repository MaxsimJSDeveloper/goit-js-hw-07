// const items = document.querySelectorAll('.item');
// Array.prototype.forEach.call(items, element => {
//   const title = element.querySelector('h2').innerHTML;
//   const itemsLength = element.querySelectorAll('li').length;
//   console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
// });

const items = document.querySelectorAll('.item');
const categoriesAllRef = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesAllRef.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').innerHTML;
  const itemsLength = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsLength}`);
});
