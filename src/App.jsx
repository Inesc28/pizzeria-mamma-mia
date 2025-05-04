import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Register from "../components/Register";
import Login from "../components/Login";
import Cart from "../components/Cart"
import Pizza from "../components/Pizza";

function App() {
  return (
    <div>
      <CustomNavbar />
      {/* <Login /> */}
      {/* <Register /> */}
      {/*<Home />/*}
      {/* <Cart /> */} 
      <Pizza />
      <Footer />
    </div>
  );
}

export default App;
