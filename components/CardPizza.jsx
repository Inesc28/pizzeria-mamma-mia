import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardPizza = ({ name, img, price, ingredients }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <section className="Ingredients">
          <p>Ingredientes: </p>
          <ul>
            {ingredients.map((index, ingredient) => (
              <li key={ingredient}>{index}</li>
            ))}
          </ul>
        </section>
        <p>Precio: ${price}</p>
        <Button variant="secondary" className="me-2">
          Ver más
        </Button>
        <Button variant="secondary">Añadir</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
