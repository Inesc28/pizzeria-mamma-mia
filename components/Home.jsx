import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
    const [pizzas, setPizzas] = useState(null);
  
    useEffect(() => {
      async function getData() {
        try {
          const res = await fetch('http://localhost:5000/api/pizzas');
          const data = await res.json();
  
          setPizzas(data);
          return data;
  
        } catch(error) {
          console.log(error)
        }
      }
  
      getData();
    }, []);
  

  return (
    <React.Fragment>
      <Header />
      <Container className="mt-5 mb-5">
        <Row>
          {pizzas && pizzas.map((pizza) => (
            <Col key={pizza.id} md={4}>
              <CardPizza {...pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Home;
