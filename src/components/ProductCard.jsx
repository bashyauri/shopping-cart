import React, { useContext } from "react";
import "./ProductCard.css";
import CartContext from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { name, price, image } = product;

  return (
    <div className="productCard">
      <img src={image} alt="Product" className="productImage" />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
