import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { formatNumber } from "../utils/formatNumber";

const CustomNavbar = () => {
  const total = 25000;
  let token = false;

  let formatPrice = formatNumber(total);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Pizzeria Mamma Mia!</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">🍕 Home</Nav.Link>

          {token ? (
            <>
              <Nav.Link href="#features">🔐 Profile</Nav.Link>
              <Nav.Link href="#features">🔐 Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="#features">🔓 Login</Nav.Link>
              <Nav.Link href="#features">🔓 Register</Nav.Link>
            </>
          )}

          <Nav.Link href="#pricing">🛒 Total: {formatPrice}$</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
