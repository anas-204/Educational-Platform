import styled from "styled-components";
import { Home, Calendar, Trophy, PenTool, Target, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import Swal from "sweetalert2";

const SidebarWrapper = styled.aside`
  background-color: hsl(var(--card));
  border-left: 1px solid #eeeeee3d;
  padding: 1rem;
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.05);
  height: 100vh;

  @media (max-width: 768px) {
    position: fixed;
    right: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
    transition: right 0.3s ease-in-out;
    z-index: 1001;
    top: 88.8px;
    width: 200px;
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
  color: hsl(var(--foreground));
  font-size: 15px;
  transition: all 0.2s ease;
  &:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--primary));
  }

  svg {
    width: 20px;
    height: 20px;
  }
  @media (max-width: );
`;

export default function Sidebar({ isOpen }) {
  const navigate = useNavigate();
  const navItems = [
    { icon: Home, label: "لوحة التحكم", path: "/StudentDashBoard" },
    { icon: Calendar, label: "الجلسات", path: "/StudentDashBoard/Sessions" },
    { icon: Trophy, label: "الاختبارات", path: "/StudentDashBoard/Quizzes" },
    { icon: PenTool, label: "الواجبات", path: "/StudentDashBoard/Homework" },
    { icon: Target, label: "التجارب", path: "/StudentDashBoard/Trials" },
    { icon: User, label: "الملف الشخصي", path: "/StudentDashBoard/Profile" },
  ];
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

  return (
    <SidebarWrapper isOpen={isOpen} className="col-xl-2 col-sm-3 ">
      <Nav>
        {navItems.map((item) => (
          <NavButton
            key={item.path}
            onClick={() => navigate(item.path)}
            className="col-10"
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
