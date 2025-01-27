import { h } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

const ProductsApp = ({ list, resolve }) => {
  const detailItems = list.map((item) => html`
    <div class="product-tile">
      <img src="https://publish-p129970-e1492622.adobeaemcloud.com/${item.primaryImage._dynamicUrl}" alt="${item.title}" />
      <h2>${item.title}</h2>
      <p>${item.description.plaintext}</p>
    </div>
  `);
  resolve();
  return html`<br/><Experience list><br/><div class="product-grid">${detailItems}</div>`;
};

export default ProductsApp;