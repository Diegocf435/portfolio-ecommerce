import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartContext from "./Context/CartContext.jsx";
import AuthContext from "./Context/UseAuth.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <CartContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContext>
    </AuthContext>
  </React.StrictMode>
);
