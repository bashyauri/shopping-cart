import React from "react";
import "./CartCard.css";

function CartCard({ product }) {
  const { name, price, image } = product;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button>Remove</button>
    </div>
  );
}

export default CartCard;
