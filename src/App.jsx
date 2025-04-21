import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Register from "../components/Register";
import Login from "../components/Login";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Login />
      {/*<Home />*/}
      <Footer />
    </div>
  );
}

export default App;
