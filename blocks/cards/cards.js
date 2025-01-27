import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

import ProductListing from './ProductListing.js';

const productList = {
  "products": [
    {
      "id": 1,
      "title": "Product 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "price": 19.99,
      "image": "https://www.gstatic.com/webp/gallery/1.webp"
    },
    {
      "id": 2,
      "title": "Product 2",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 29.99,
      "image": "https://www.gstatic.com/webp/gallery/1.webp"
    },
    {
      "id": 3,
      "title": "Product 3",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "price": 14.99,
      "image": "https://www.gstatic.com/webp/gallery/1.webp"
    },
    {
      "id": 4,
      "title": "Product 4",
      "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "price": 39.99,
      "image": "https://www.gstatic.com/webp/gallery/1.webp"
    },
    {
      "id": 5,
      "title": "Product 5",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 9.99,
      "image": "https://www.gstatic.com/webp/gallery/1.webp"
    }
  ]
};

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
  block.textContent = '';
  var productRender = ProductListing(productList);

  console.log(productRender);
  block.append(productRender);
}
