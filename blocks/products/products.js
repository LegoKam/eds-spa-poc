import {
    h, render,
  } from '../../scripts/preact.js';
  import htm from '../../scripts/htm.js';
  import ProductsApp from './ProductsApp.js';

  
  const html = htm.bind(h);
  
  export default async function decorate(block) {
    block.textContent = '';

    try {
      const response = await fetch('https://publish-p129970-e1492622.adobeaemcloud.com/graphql/execute.json/aem-demo-assets/adventures-all?a=b');
      const data = await response.json();

      const config = data.data.adventureList.items.reduce((acc, item) => {
        acc[item.title] = item.description;
        return acc;
      }, {});

      console.log(config);
      return new Promise((resolve) => {
        const app = html`<h2>FAQs</h2><${ProductsApp} list=${config} resolve=${resolve} />`;
        render(app, block);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }