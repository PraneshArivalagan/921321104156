
// components/AllProductsPage.js
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { getTopProducts } from '../api';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default AllProductsPage;
