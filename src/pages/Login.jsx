import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { useUser } from "../../src/context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(null);

    const validationMessage = validate(email, password);
    if (validationMessage) {
      setLoginError(validationMessage);
      return;
    }

    const result = await login(email, password);
    if (result.success) {
      navigate("/"); // Redirect to home or dashboard on successful login
    } else {
      setLoginError(result.message);
    }
  };

  const validate = (email, password) => {
    if (email === "" || password === "") {
      return "Todos los campos son obligatorios.";
    }

    if (!email.includes("@")) {
      return "El correo electrónico debe contener '@'.";
    }

    if (password.length < 6) {
      return "La contraseña debe tener al menos 6 caracteres.";
    }
    return null;
  };

  return (
    <Form className="mt-5 m-5" onSubmit={handleLogin}>
      <h1 className="mb-5">Login</h1>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Col>
      </Form.Group>
      <Button className="mt-4" variant="danger" type="submit">
        Login
      </Button>

      {loginError && (
        <Alert className="mt-5" variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          {loginError}
        </Alert>
      )}
    </Form>
  );
};

export default Login;
