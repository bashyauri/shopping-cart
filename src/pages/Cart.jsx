import { useContext } from "react";
import CartCard from "../components/CartCard";
import CartContext from "../context/CartContext";
import UseTitle from "../hooks/UseTitle";

function Cart() {
  const { total, cartList } = useContext(CartContext);
  console.log(cartList);

  UseTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {cartList.length}/${total}
        </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

export default Cart;
``;
