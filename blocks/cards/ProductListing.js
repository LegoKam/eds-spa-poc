import { h } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

import ProductTile from './ProductTile.js';

const html = htm.bind(h);
  
export default function ProductList({ products }) {
    console.log(products);

    products.map((product) => (
        ProductTile(product.id, product)
    ));

    return ("ddsfds");
  }