import { StrictMode } from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
      <App />
  </StrictMode>
);
