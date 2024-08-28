import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import products from "../../constants/products";
import Styles from "./styles";
import { randNum } from "../../utils";



const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    if (!id) return;
    setTimeout(() => {
      setProduct(products.find(product =>
        product.id.toString() === id.toString())
      );
    }, randNum(500, 2000)) // simulate a page load between .5s and 2s
  }, [id])


  return (
    <Styles className="product-details">
      <h1 className="title">
        {product ? (
          product.title
        ) : (
          "Loading Product ..."
        )}
      </h1>
      {!product ? (
        null
      ) : (
        <div className="wrapper">
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-details">
            <h2>{product.title}</h2>
            <p>{product.title}</p>
            <button className="button">Add to Cart</button>
          </div>
        </div>
      )}
    </Styles>
  );
}

export default ProductDetails;

