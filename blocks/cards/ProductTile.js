export default function ProductTile({ product }) {
    console.log(product);

    const tile = document.createElement('div');
    tile.classList.add('product-tile'); 
  
    // // Create the image element
    // const imageTag = document.createElement('img');
    // imageTag.src = product.image;
    // imageTag.alt = product.title;
    // tile.appendChild(imageTag);
  
    // // Create the title element
    // const title = document.createElement('h2');
    // title.textContent = product.title;
    // tile.appendChild(title);
  
    // // Create the description element
    // const description = document.createElement('p');
    // description.textContent = product.description;
    // tile.appendChild(description);
  
    // // Create the price element
    // const price = document.createElement('p');
    // price.textContent = "$" + product.price;
    // tile.appendChild(price);

    console.log(tile);
    return (tile);
    
}