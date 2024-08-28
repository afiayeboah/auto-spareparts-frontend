import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import productData from '../../constants/products.json';
import Styles from './styles';



const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <Styles className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Styles>
  );
};

export default ProductList;
