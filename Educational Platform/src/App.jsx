import Login from "../pages/Login";
import "../styles/App.css";
import Register from "../pages/Register";
import Home from "../pages/Home";
import StudentDashBoard from "../pages/student/StudentDashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ControlPanel from "../pages/student/ControlPanel";
import Sessions from "../pages/student/Sessions";
import Quizzes from "../pages/student/Quizzes";
import Homework from "../pages/student/Homework";
import Trials from "../pages/student/Trials";
import Profile from "../pages/student/Profile";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/StudentDashBoard" element={<StudentDashBoard />}>
            <Route index element={<ControlPanel />} />
            <Route path="Sessions" element={<Sessions />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Homework" element={<Homework />} />
            <Route path="Trials" element={<Trials />} />
            <Route path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
