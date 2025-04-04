import React, { useContext } from "react";
import "./CartCard.css";
import CartContext from "../context/CartContext";

function CartCard({ product }) {
  const { removeFromCart } = useContext(CartContext);

  const { name, price, image } = product;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  );
}

export default CartCard;
