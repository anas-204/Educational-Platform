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
import TeacherDashBoard from "../pages/teacher/TeacherDashBoard";
import TeacherControlPannel from "../pages/teacher/TeacherControlPannel";
import Mission from "../pages/teacher/Mission";
import Assignments from "../pages/teacher/Assignments";
import SessionManagement from "../pages/teacher/SessionManagement";
import Students from "../pages/teacher/Students";
import TeacherProfile from "../pages/teacher/TeacherProfile";
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
          <Route path="/TeacherDashBoard" element={<TeacherDashBoard />}>
            <Route index element={<TeacherControlPannel />} />
            <Route path="Mission" element={<Mission />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="SessionManagement" element={<SessionManagement />} />
            <Route path="Students" element={<Students />} />
            <Route path="TeacherProfile" element={<TeacherProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
