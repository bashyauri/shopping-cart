import { useContext } from "react";
import CartCard from "../components/CartCard";
import CartContext from "../context/CartContext";
import UseTitle from "../hooks/UseTitle";

function Cart() {
  const { total } = useContext(CartContext);
  console.log(total);
  UseTitle("Cart");
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "/assets/images/1002.png",
    },
  ];
  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {products.length}/{total}
        </h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

export default Cart;
``;
