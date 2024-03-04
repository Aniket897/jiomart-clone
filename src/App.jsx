import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Category from "./pages/Category";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
