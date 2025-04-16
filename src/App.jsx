import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
