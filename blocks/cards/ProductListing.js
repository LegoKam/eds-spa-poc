import ProductTile from './ProductTile.js';
  
export default function ProductList({ products }) {
    console.log(products);

    var content = '';
    products.map((product) => (
        content = ProductTile(product.id, product)
    ));

    return (content);
  }