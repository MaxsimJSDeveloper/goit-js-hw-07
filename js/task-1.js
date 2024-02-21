const items = document.querySelectorAll('.item');
const categoriesAllRef = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesAllRef.length}`);

function callback(item) {
  const title = item.querySelector('h2').innerHTML;
  const itemsLength = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsLength}`);
}

items.forEach(callback);
