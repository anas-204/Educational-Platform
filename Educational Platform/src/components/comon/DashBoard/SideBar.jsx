import styled from "styled-components";
import {
  Home,
  Calendar,
  Trophy,
  PenTool,
  Target,
  User,
  Users,
  FileText,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
const SidebarWrapper = styled.aside`
  background-color: hsl(var(--card));
  border-left: 1px solid hsl(var(--border));
  padding: 1rem;
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.05);
  width: 200px;
  z-index: 1001;

  @media (max-width: 768px) {
    position: fixed;
    top: 85px;
    right: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
    height: calc(100vh - 85px);
    transition: right 0.3s ease-in-out;
  }

  @media (min-width: 769px) {
    position: sticky;
    top: 85px;
    height: calc(100vh - 85px);
    right: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  text-align: right;
  border-radius: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: ${({ active }) =>
    active ? "hsl(var(--primary))" : "hsl(var(--foreground))"};
  transition: color 0.3s ease;
  svg {
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ active }) => (active ? "100%" : "0")};
    height: 100%;
    background: hsl(var(--accent));
    z-index: -1;
    transition: width 0.4s ease-in-out;
  }
`;

export default function Sidebar({ isOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [userType, setUserType] = useState("student");
  useEffect(() => {
    const storedUserType = localStorage.getItem("userType");
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  const studentNavItems = [
    { icon: Home, label: "لوحة التحكم", path: "/StudentDashBoard" },
    { icon: Calendar, label: "الجلسات", path: "/StudentDashBoard/Sessions" },
    { icon: Trophy, label: "الاختبارات", path: "/StudentDashBoard/Quizzes" },
    { icon: PenTool, label: "الواجبات", path: "/StudentDashBoard/Homework" },
    { icon: Target, label: "التجارب", path: "/StudentDashBoard/Trials" },
    { icon: User, label: "الملف الشخصي", path: "/StudentDashBoard/Profile" },
  ];
  const teacherNavItems = [
    { icon: Home, label: "لوحة التحكم", path: "/TeacherDashBoard" },
    {
      icon: Calendar,
      label: "الجلسات",
      path: "/TeacherDashBoard/SessionManagement",
    },
    { icon: Users, label: "الطلاب", path: "/TeacherDashBoard/Students" },
    { icon: FileText, label: "المهام", path: "/TeacherDashBoard/Mission" },
    {
      icon: Trophy,
      label: "الاختبارات",
      path: "/TeacherDashBoard/Assignments",
    },
    {
      icon: User,
      label: "الملف الشخصي",
      path: "/TeacherDashBoard/TeacherProfile",
    },
  ];
  const navItems = userType === "teacher" ? teacherNavItems : studentNavItems;
  const handleLogout = () => {
    Swal.fire({
      title: "هل أنت متأكد؟",
      text: "سيتم تسجيل خروجك من الحساب",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم، تسجيل الخروج",
      cancelButtonText: "إلغاء",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("تم تسجيل الخروج!", "", "success");

        navigate("/login");
      }
    });
  };

  return (
    <SidebarWrapper isOpen={isOpen} className="col-xl-2 col-sm-3 ">
      <Nav>
        {navItems.map((item) => (
          <NavButton
            key={item.path}
            onClick={() => navigate(item.path)}
            className="col-10"
            active={location.pathname === item.path}
          >
            <item.icon />
            {item.label}
          </NavButton>
        ))}
      </Nav>
      <NavButton onClick={handleLogout} className="d-md-none">
        <LogOut />
        تسجيل الخروج
      </NavButton>
    </SidebarWrapper>
  );
}
