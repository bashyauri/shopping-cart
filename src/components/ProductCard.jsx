import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { name, price, image } = product;
  return (
    <div className="productCard">
      <img src={image} alt="Product" className="productImage" />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
