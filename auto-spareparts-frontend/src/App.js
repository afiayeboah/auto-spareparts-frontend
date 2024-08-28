import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import { CartProvider } from './contexts/CartContext';
import Footer from './components/Footer';

import PageWrapper from "./components/PageWrapper";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import Products from './pages/Products';
import LoginPage from './pages/LoginPage'; // Import LoginPage
import SignupPage from './pages/SignUpPage'; // Import SignupPage
import './styles/main-theme.css';
import Page404 from './pages/Page404';



const App = () => (
  <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route element={<PageWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Add LoginPage route */}
          <Route path="/signup" element={<SignupPage />} /> {/* Add SignupPage route */}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  </CartProvider>
);

export default App;
