import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../assets/logo.png";
import "./Header.css";
import CartContext from "../context/CartContext";

function Header() {
  const { cartList } = useContext(CartContext);
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shago Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart:{cartList.length}</span>
      </Link>
    </header>
  );
}

export default Header;
