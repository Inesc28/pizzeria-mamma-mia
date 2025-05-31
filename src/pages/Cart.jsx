import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { formatNumber } from "../../utils/formatNumber";
import "../assets/styles/Cart.css";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    calculateTotal,
    clearCart,
  } = useCart();
  const { token } = useUser();
  const [checkoutMessage, setCheckoutMessage] = useState(null);
  const [messageVariant, setMessageVariant] = useState("success");

  const total = calculateTotal();

  const handleCheckout = async () => {
    if (!token) {
      setCheckoutMessage("Debes iniciar sesión para realizar la compra.");
      setMessageVariant("danger");
      return;
    }

    if (cart.length === 0) {
      setCheckoutMessage(
        "El carrito está vacío, no se puede realizar la compra."
      );
      setMessageVariant("warning");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items: cart, total: total }),
      });

      const data = await response.json();

      if (response.ok) {
        setCheckoutMessage("¡Compra realizada con éxito!");
        setMessageVariant("success");
        clearCart();
      } else {
        setCheckoutMessage(data.message || "Error al procesar la compra.");
        setMessageVariant("danger");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      setCheckoutMessage("Error de red o el servidor no está disponible.");
      setMessageVariant("danger");
    }
  };

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
      <Button
        className="mb-4"
        variant="dark"
        onClick={handleCheckout}
        disabled={!token || cart.length === 0}
      >
        Pagar
      </Button>
      {checkoutMessage && (
        <Alert className="mt-3" variant={messageVariant}>
          {checkoutMessage}
        </Alert>
      )}
    </React.Fragment>
  );
};

export default Cart;
