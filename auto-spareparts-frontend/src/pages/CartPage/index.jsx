import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // To handle navigation
import { CartContext } from '../../contexts/CartContext';
import a1 from '../../assets/images/a1.jpeg';
import a2 from '../../assets/images/a2.jpeg';
import a3 from '../../assets/images/a3.jpg';
import a4 from '../../assets/images/a4.jpg';
import a5 from '../../assets/images/a5.jpg';
import a6 from '../../assets/images/a6.jpg';
import a7 from '../../assets/images/a7.jpg';
import a8 from '../../assets/images/a8.jpeg';
import a9 from '../../assets/images/a9.jpeg';
import a10 from '../../assets/images/a10.jpg';
import defaultImage from '../../assets/images/default.jpeg';

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

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleCheckout = () => {
    const isAuthenticated = false; // Replace this with actual authentication check
    if (isAuthenticated) {
      navigate('/checkout'); // Redirect to checkout page if authenticated
    } else {
      navigate('/login'); // Redirect to login page if not authenticated
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={imageMap[product.id] || defaultImage} alt={product.title} className="cart-image" />
              <div className="cart-details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </div>
            </div>
          ))}
          <button onClick={handleCheckout} className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
