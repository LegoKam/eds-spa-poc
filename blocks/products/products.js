import { h, render } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import ProductsApp from './ProductsApp.js';

const html = htm.bind(h);

export default async function decorate(block) {
  block.textContent = '';

  try {
    const response = await fetch('https://publish-p129970-e1492622.adobeaemcloud.com/graphql/execute.json/aem-demo-assets/adventures-all?b=c');
    const data = await response.json();

    const items = data.data.adventureList.items;

    return new Promise((resolve) => {
      const app = html`<${ProductsApp} list=${items} resolve=${resolve} />`;
      render(app, block);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}