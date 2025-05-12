import Figure from 'react-bootstrap/Figure';
import Button from "react-bootstrap/Button";

const Profile = () => {
  return (
    <Figure className="m-5">
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://tse4.mm.bing.net/th/id/OIP._i1ybSRYAPNqdHpDH_O1MQHaHa?rs=1&pid=ImgDetMain"
      />
      <Figure.Caption>
        user123@gmail.com
      </Figure.Caption>
      <Button className="mt-5" variant="outline-danger">Cerrar Sesion</Button>
    </Figure>
  );
};

export default Profile;
