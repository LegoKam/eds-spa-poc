import ProductTile from './ProductTile.js';
  
export default function ProductList({ products }) {
    console.log(products);

    products.map((product) => (
        ProductTile(product.id, product)
    ));

    return ("ddsfds");
  }