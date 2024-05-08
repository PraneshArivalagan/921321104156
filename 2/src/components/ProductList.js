// components/ProductList.js
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.productName}>
          <img src={product.image} alt={product.productName} />
          <h3>{product.productName}</h3>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}</p>
          <p>Availability: {product.availability}</p>
          <p>Company: {product.company}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
