import React from 'react';
import { Link } from 'react-router-dom';
import a1 from '../assets/images/a1.jpeg';
import a2 from '../assets/images/a2.jpeg';
import a3 from '../assets/images/a3.jpg';
import a4 from '../assets/images/a4.jpg';
import a5 from '../assets/images/a5.jpg';
import defaultImage from '../assets/images/default.jpeg'; // Example default image
const imageMap = {
  1: a1,
  2: a2,
  3: a3,
  4: a4,
  5: a5,
};

const ProductItem = ({ product }) => {
  const imageUrl = imageMap[product.id] || defaultImage;

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
      <img src={imageUrl} alt={product.title} className="product-image" />
      </Link>
      <h3>
      <Link to={`/product/${product.id}`}>{product.title}</Link> 
      </h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductItem;