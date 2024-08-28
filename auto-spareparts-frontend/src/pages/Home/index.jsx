import React from "react";
import ProductList from "../../components/ProductList";
import Styles from "./styles";



const Home = () => (
  <Styles>
    <div className="wrapper">
      <h1>Welcome to A&A Auto & Spare Parts Shop</h1>
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At A&A Auto & Spare Parts Shop, we specialize in providing top-quality
          automobile spare parts for all major vehicle brands. Whether you need
          engine components, brake parts, or suspension systems, we have it all.
          Our mission is to keep your vehicle running smoothly and safely with
          parts you can trust.
        </p>
        <p>
          With us, you are assured the best parts and products that will make you
          drive with confidence. Explore our wide range of products and experience
          unbeatable prices, excellent customer service, and fast shipping. Your
          satisfaction is our priority!
        </p>
      </section>
    </div>

    {/* Product List */}
    <ProductList />
  </Styles>
);

export default Home;

