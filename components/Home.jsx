import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={4}>
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={[
                "Mozzarella", 
                "Tomates", 
                "Jamón", 
                "Orégano"
              ]}
              img="https://th.bing.com/th/id/R.68d2238672948f2ff8a6944380bac8bc?rik=s%2b7rof%2fE%2fMU1qg&riu=http%3a%2f%2fmilrecetas.net%2fwp-content%2fuploads%2f2015%2f06%2fPizza-Napolitana-2.jpg&ehk=wIzwfQQ0LccYL6Vefii%2fY4U%2bW%2b%2fAwB3kXG9%2fFjtv2qY%3d&risl=&pid=ImgRaw&r=0"
            />
          </Col>
          <Col md={4}>
            <CardPizza
              name="Española"
              price={6950}
              ingredients={[
                "Mozzarella",
                "Gorgonzola",
                "Parmesano",
                "Provolone",
              ]}
              img="https://th.bing.com/th/id/R.ddc12b03426b9b96292e40e09ff0149a?rik=UgbrEmQjNwJ%2fMg&pid=ImgRaw&r=0&sres=1&sresct=1"
            />
          </Col>
          <Col md={4}>
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={[
                "Mozzarella", 
                "Pepperoni", 
                "Orégano"
              ]}
              img="https://th.bing.com/th/id/OIP.sMUCGdcKagZquona8kso9AHaE8?rs=1&pid=ImgDetMain"
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Home;
