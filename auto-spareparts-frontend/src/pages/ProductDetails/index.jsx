import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import products from "../../constants/products";



const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    if (!id) return;
    setProduct(products.find(product =>
      product.id.toString() === id.toString())
    );
  }, [id])


  return (
    <div className="product-details">
      {!product ? (
        <div className="loading">
          Loading
        </div>
      ) : (
        <>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-details">
            <h2>{product.title}</h2>
            <p>{product.title}</p>
            <button>Add to Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;

