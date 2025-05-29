import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/Navbar";
import Home from "../src/pages/Home";
import Footer from "../components/Footer";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "../components/NotFound";
import Profile from "../components/Profile";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "../components/ProtectedRoute";

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <CustomNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRoute isPublicOnly={true}>
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute isPublicOnly={true}>
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
