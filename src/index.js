import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailProduct from "./pages/DetailProduct";
import SignIn from "./pages/signIn/SignIn";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail" element={<DetailProduct />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
