import Login from "../pages/Login";
import "../styles/App.css";
import Register from "../pages/Register";
import Home from "./pages/Home";
import { BrowserRouter,Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}
