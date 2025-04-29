import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../utils/pizzas"; 

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Container className="mt-5 mb-5">
        <Row>
          {pizzas.map((pizza) => (
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
