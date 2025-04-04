import React, { createContext, useReducer } from "react";
import CartReducers from "../reducers/CartReducers";

const initialState = {
  cartList: [],
  total: 0,
};
const CartContext = createContext(initialState);

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducers, initialState);
  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product);
    updateTotal(updatedCartList);
    // console.log(state.cartList.concat(product));
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
        total: updatedCartList.length,
      },
    });
  };
  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    updateTotal(updatedCartList);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };
  const updateTotal = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));
    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total,
      },
    });
  };

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
