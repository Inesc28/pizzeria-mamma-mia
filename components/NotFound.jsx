import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Alert variant="danger mt-5 m-5">
        <Alert.Heading>¡Oops! Página no encontrada.</Alert.Heading>
        <p>
          Parece que la dirección a la que intentas acceder no existe en nuestro
          sitio. Puede que haya habido un error en el enlace o que la página
          haya sido movida o eliminada. Te sugerimos volver a la página
          principal o utilizar la barra de búsqueda para encontrar lo que
          buscas. ¡Lo sentimos por el inconveniente!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to="/">
            <Button variant="outline-danger">Vuelve al Inicio</Button>
          </Link>
        </div>
      </Alert>
    </>
  );
};

export default NotFound;
