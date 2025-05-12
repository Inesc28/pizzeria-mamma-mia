import { useState, useEffect } from "react";
import Figure from "react-bootstrap/Figure";
import "../assets/styles/Pizza.css";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await res.json();
        setPizza(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

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
          <Figure.Caption className="pizza-price">
            ${pizza.price}
          </Figure.Caption>
        </Figure>
      ) : (
        <p className="loading-message">Cargando información de la pizza...</p>
      )}
    </div>
  );
};

export default Pizza;
