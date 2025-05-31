import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { useUser } from "../../src/context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [registerError, setRegisterError] = useState(null);
  const { register } = useUser();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError(null);

    const validationMessage = validate(email, password, confirm);
    if (validationMessage) {
      setRegisterError(validationMessage);
      return;
    }

    const result = await register(email, password);
    if (result.success) {
      navigate("/"); // Redirect to home or dashboard on successful registration
    } else {
      setRegisterError(result.message);
    }
  };

  const validate = (email, password, confirm) => {
    if (email === "" || password === "" || confirm === "") {
      return "Todos los campos son obligatorios.";
    }

    if (!email.includes("@")) {
      return "El correo electrónico debe contener '@'.";
    }

    if (password.length < 6) {
      return "La contraseña debe tener al menos 6 caracteres.";
    }

    if (password !== confirm) {
      return "Las contraseñas no coinciden.";
    }

    return null;
  };

  return (
    <Form className="mt-5 m-5" onSubmit={handleRegister}>
      <h1 className="mb-5">Register</h1>
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

      <Form.Group as={Row} className="mb-3" controlId="formValidatePassword">
        <Form.Label column sm="2">
          Confirm Password
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="password"
            placeholder="Password"
            name="confirm"
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
          />
        </Col>
      </Form.Group>
      <Button className="mt-4" variant="danger" type="submit">
        Submit
      </Button>

      {registerError && (
        <Alert className="mt-5" variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          {registerError}
        </Alert>
      )}
    </Form>
  );
};

export default Register;
