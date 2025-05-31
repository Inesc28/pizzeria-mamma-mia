import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import { useUser } from "../src/context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";

const Profile = () => {
  const { email, logout, getProfile } = useUser();
  const navigate = useNavigate();
  const [profileEmail, setProfileEmail] = useState(email);
  const [profileError, setProfileError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!email) {
        const result = await getProfile();
        if (result.success) {
          setProfileEmail(result.user.email);
        } else {
          setProfileError(result.message);
          if (result.message.includes("authenticated")) {
            logout();
            navigate("/login");
          }
        }
      }
    };
    fetchProfile();
  }, [email, getProfile, logout, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Figure className="m-5">
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://tse4.mm.bing.net/th/id/OIP._i1ybSRYAPNqdHpDH_O1MQHaHa?rs=1&pid=ImgDetMain"
      />
      {profileEmail ? (
        <Figure.Caption>Email: {profileEmail}</Figure.Caption>
      ) : (
        <Figure.Caption>Cargando perfil...</Figure.Caption>
      )}
      {profileError && (
        <Alert className="mt-3" variant="danger">
          {profileError}
        </Alert>
      )}
      <Button className="mt-5" variant="outline-danger" onClick={handleLogout}>
        Cerrar Sesion
      </Button>
    </Figure>
  );
};

export default Profile;
