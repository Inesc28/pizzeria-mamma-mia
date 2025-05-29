import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useCart } from "../src/context/CartContext";
import { formatNumber } from "../utils/formatNumber";

const CardPizza = ({ id, name, img, price, ingredients, desc }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, img, price, desc });
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title className="text-capitalize">{name}</Card.Title>
        <section className="Ingredients">
          <p className="fw-bold">Ingredientes: </p>
          <ul>
            {ingredients &&
              ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
          </ul>
        </section>
        <p className="fw-bold fs-4">Precio: ${formatNumber(price)}</p>

        <div className="d-flex justify-content-between">
          <Link to={`/pizza/${id}`}>
            <Button variant="dark" className="me-2">
              Ver más 👀
            </Button>
          </Link>
          <Button variant="outline-danger" onClick={handleAddToCart}>
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
