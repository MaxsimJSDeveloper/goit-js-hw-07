'use strict';
const items = document.querySelectorAll('li.item');
console.log(`Number of categories: ${items.length}`);

function callback(item) {
  const title = item.querySelector('h2').textContent;
  const itemsLength = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsLength}`);
}

items.forEach(callback);
