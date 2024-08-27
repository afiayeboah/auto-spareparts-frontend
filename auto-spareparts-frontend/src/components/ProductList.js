import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import productData from '../products.json'; // Make sure the path to your JSON file is correct

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
