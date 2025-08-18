import React from "react";
import styled from "styled-components";
import {
  Home,
  Calendar,
  Trophy,
  PenTool,
  Target,
  User,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const SidebarWrapper = styled.aside`
  background-color: hsl(var(--card));
  border-right: 1px solid hsl(var(--border));
  min-height: calc(100vh - 88.8px);
  padding: 1rem;
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 88.8px;
  right: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  width: 195px;
  height: 100vh;
  transition: right 0.3s ease-in-out;
  z-index: 1001;
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
  color: hsl(var(--foreground));
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export default function Sidebar({ isOpen }) {
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
        // Code Make Logout ya anooos
        // remove token from Api ya anoos
        navigate("/login");
      }
    });
  };
  const navigate = useNavigate();
  const navItems = [
    { icon: Home, label: "لوحة التحكم", path: "/StudentDashBoard" },
    { icon: Calendar, label: "الجلسات", path: "/StudentDashBoard/Sessions" },
    { icon: Trophy, label: "الاختبارات", path: "/StudentDashBoard/Quizzes" },
    { icon: PenTool, label: "الواجبات", path: "/StudentDashBoard/Homework" },
    { icon: Target, label: "التجارب", path: "/StudentDashBoard/Trials" },
    { icon: User, label: "الملف الشخصي", path: "/StudentDashBoard/Profile" },
  ];

  return (
    <SidebarWrapper isOpen={isOpen}>
      <Nav>
        {navItems.map((item) => (
          <NavButton key={item.path} onClick={() => navigate(item.path)}>
            <item.icon />
            {item.label}
          </NavButton>
        ))}
        <NavButton onClick={handleLogout}>
          <LogOut  />
          تسجيل الخروج
        </NavButton>
      </Nav>
    </SidebarWrapper>
  );
}
