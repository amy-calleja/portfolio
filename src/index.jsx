import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="index">
    <App />
  </div>
);

reportWebVitals();
