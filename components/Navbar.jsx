import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";
import { useCart } from "../src/context/CartContext";
import { useUser } from "../src/context/UserContext";

const CustomNavbar = () => {
  const { calculateTotal } = useCart();
  const total = calculateTotal();

  const { token, logout } = useUser();
  const navigate = useNavigate();

  let formatPrice = formatNumber(total);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Pizzeria Mamma Mia!
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            🍕 Home
          </Nav.Link>

          {token ? (
            <>
              <Nav.Link as={Link} to="/profile">
                🔐 Profile
              </Nav.Link>
              <Button
                variant="link"
                className="nav-link"
                onClick={handleLogout}
              >
                🔐 Logout
              </Button>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">
                🔓 Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                🔓 Register
              </Nav.Link>
            </>
          )}

          <Nav.Link as={Link} to="/cart">
            🛒 Total: {formatPrice}$
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
