import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/navbar/index";
import Login from "./pages/login";
import Chitietkhachhang from "./pages/chitietkhachhang";
import Nhacungcap from "./pages/nhacungcap";
import Themctkh from "./pages/themctkh";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    {/* <Chitietkhachhang/> */}
    {/* <Themctkh/> */}
    {/* <Nhacungcap/> */}
    {/* <Login/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
