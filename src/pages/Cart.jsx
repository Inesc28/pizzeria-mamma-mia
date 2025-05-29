import React from "react";
import Button from "react-bootstrap/Button";
import { useCart } from "../context/CartContext"; 
import { formatNumber } from "../../utils/formatNumber"; 
import "../assets/styles/Cart.css";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, calculateTotal } = useCart(); 

  const total = calculateTotal(); 

  return (
    <React.Fragment>
      <h3 className="cart-title mt-5 mb-5">Detalles del pedido</h3>
      {cart.length === 0 ? (
        <p className="empty-cart">El carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <div className="shopping-cart" key={item.id}>
            <img className="pizza-img mb-5" src={item.img} alt={item.name} />
            <h5 className="pizza-name">{item.name}</h5>
            <p className="pizza-price">${formatNumber(item.price)}</p> 
            <Button
              variant="outline-danger"
              onClick={() => decreaseQuantity(item.id)} 
            >
              -
            </Button>
            <p className="pizza-count">{item.count}</p>
            <Button
              variant="outline-primary"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </Button>
          </div>
        ))
      )}
      <h5 className="total mb-5">Total: ${formatNumber(total)}</h5> 
      <Button className="mb-4" variant="dark">
        Pagar
      </Button>
    </React.Fragment>
  );
};

export default Cart;