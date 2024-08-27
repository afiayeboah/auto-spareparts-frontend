import React, { useContext } from 'react'; // Import useContext from React
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext'; // Ensure the path is correct
import a1 from '../assets/images/a1.jpeg';
import a2 from '../assets/images/a2.jpeg';
import a3 from '../assets/images/a3.jpg';
import a4 from '../assets/images/a4.jpg';
import a5 from '../assets/images/a5.jpg';
import a6 from '../assets/images/a6.jpg';
import a7 from '../assets/images/a7.jpg';
import a8 from '../assets/images/a8.jpeg';
import a9 from '../assets/images/a9.jpeg';
import a10 from '../assets/images/a10.jpg';
import defaultImage from '../assets/images/default.jpeg'; 

const imageMap = {
  1: a1,
  2: a2,
  3: a3,
  4: a4,
  5: a5,
  6: a6,
  7: a7,
  8: a8,
  9: a9,
  10: a10,
};

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext); // Use useContext to get the addToCart function
  const imageUrl = imageMap[product.id] || defaultImage;

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={imageUrl} alt={product.title} className="product-image" />
      </Link>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
