import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errorMessage = validate(email, password);

  return (
    <Form className="mt-5 m-5">
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
      <Button
        className="mt-4"
        variant="danger"
        onClick={(e) => {
          setEmail(""),
            setPassword(""),
            alert("Datos Correctos");
        }}
      >
        Login
      </Button>

      <Alert className="mt-5" variant="danger">
        Messages!
        <Alert.Heading>{errorMessage}</Alert.Heading>
      </Alert>
    </Form>
  );
};

const validate = (email, password) => {
  const errors = {
    email: "Email Incorrecto",
    password: "Contraseña Incorrecta",
    empty: "Los campos estan vacios",
  };

  if (email === "" || password === "") {
    return (errors.empty = "Todos los campos son obligatorios.");
  }

  if (!email.includes("@")) {
    return (errors.email = "El correo electrónico debe contener '@'.");
  }

  if (password.length < 6) {
    return (errors.password =
      "La contraseña debe tener al menos 6 caracteres.");
  }

  return null;
};

export default Login;
