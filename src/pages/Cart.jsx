import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { pizzaCart as initialCart } from "../../utils/pizzas";
import "../assets/styles/Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const increaseCount = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseCount = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <React.Fragment>
      <h3 className="cart-title mt-5 mb-5">Detalles del pedido</h3>
      {cart.length === 0 ? (
        <p className="empty-cart">El carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <div className="shopping-cart" key={item.id}>
            <img className="pizza-img mb-5" src={item.img} alt="Pizza" />
            <h5 className="pizza-name">{item.name}</h5>
            <p className="pizza-price">${item.price}</p>
            <Button
              variant="outline-danger"
              onClick={() => decreaseCount(item.id)}
            >
              -
            </Button>
            <p className="pizza-count">{item.count}</p>
            <Button
              variant="outline-primary"
              onClick={() => increaseCount(item.id)}
            >
              +
            </Button>
          </div>
        ))
      )}
      <h5 className="total mb-5">Total: ${total}</h5>
      <Button className="mb-4" variant="dark">
        Pagar
      </Button>
    </React.Fragment>
  );
};

export default Cart;
