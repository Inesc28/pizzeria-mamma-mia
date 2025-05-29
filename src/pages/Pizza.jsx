import { useState, useEffect } from "react";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatNumber } from "../../utils/formatNumber";
import "../assets/styles/Pizza.css";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();

  const { addToCart } = useCart();

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!res.ok) {
          throw new Error(`Error al cargar la pizza: ${res.statusText}`);
        }
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la información de la pizza:", error);
        setPizza(null);
      }
    }

    getData();
  }, [id]);

  const handleAddToCart = () => {
    if (pizza) {
      addToCart({
        id: pizza.id,
        img: pizza.img,
        name: pizza.name,
        price: pizza.price,
        desc: pizza.desc,
      });
    }
  };

  return (
    <div className="pizza-container">
      {pizza ? (
        <Figure className="pizza-figure">
          <h1 className="pizza-title">{pizza.name}</h1>
          <div className="image-container">
            <Figure.Image
              src={pizza.img}
              alt={pizza.name}
              className="pizza-image"
            />
          </div>
          <Figure.Caption className="pizza-description">
            {pizza.desc}
          </Figure.Caption>
          <p className="ingredients-title">Ingredientes:</p>
          <ul className="ingredients-list">
            {pizza.ingredients &&
              pizza.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  {ingredient}
                </li>
              ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <Figure.Caption className="pizza-price fs-3 fw-bold">
              ${formatNumber(pizza.price)}
            </Figure.Caption>
            <Button variant="danger" onClick={handleAddToCart}>
              Añadir al Carrito 🛒
            </Button>
          </div>
        </Figure>
      ) : (
        <p className="loading-message">Cargando información de la pizza...</p>
      )}
    </div>
  );
};

export default Pizza;
