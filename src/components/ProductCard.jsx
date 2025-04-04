import React, { useContext, useEffect, useState } from "react";
import "./ProductCard.css";
import CartContext from "../context/CartContext";

function ProductCard({ product }) {
  const { removeFromCart, addToCart, cartList } = useContext(CartContext);
  const { name, price, image } = product;
  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    const productIsInCart = cartList.find(
      (current) => current.id === product.id
    );
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <div className="productCard">
      <img src={image} alt="Product" className="productImage" />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button className="addToCart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
