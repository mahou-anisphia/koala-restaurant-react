import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../src/pages/Login.jsx";
import Error404 from "../src/pages/Error404.jsx";
import Error500 from "../src/pages/Error500.jsx";
import Coffee from "./pages/Coffee/Coffee.jsx";
import Tea from "./pages/Tea/Tea.jsx";
import Delivery from "./pages/Delivery/Delivery.jsx";
import Menu from "./pages/Menu/Menu.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<App />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/tea" element={<Tea />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="*" element={<Error404 />} />
        <Route path="error" element={<Error500 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
