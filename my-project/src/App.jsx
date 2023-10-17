import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Login from "./Component/Login/Login";
import Products from "./Component/Products/Products";
import Register from "./Component/Register/Register";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
