import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { GraduationCap, Sun, Moon, Menu } from "lucide-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
const Nav = styled("nav")`
  background-color: hsl(var(--card));
  border-bottom: 1px solid hsl(var(--border));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1002;
  height: 85px;
`;
const Main = styled.div`
  padding: 0.5rem 1.5rem;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  direction: rtl;
`;
const Left = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;

  @media (max-width: 404px) {
    gap: 0.5rem;
  }
`;
const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  svg {
    height: 1rem;
    width: 1rem;
  }
`;
const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  text-align: right;
  border-radius: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: hsl(var(--foreground));
  font-size: 0.95rem;
  transition: all 0.2s ease;
  border: 1px solid #eee;
  &:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--primary));
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
const ghost = css`
  background: transparent;
  color: hsl(var(--foreground));
  &:hover {
    background: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;
const outline = css`
  border: 1px solid hsl(var(--input));
  background: hsl(var(--background));
  &:hover {
    background: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;
const sm = css`
  height: 2.25rem;
  padding: 0 0.75rem;
  font-size: 0.875rem;
`;
const Button = styled.button`
  ${buttonBase}
  ${(props) => props.variant === "ghost" && ghost}
  ${(props) => props.variant === "outline" && outline}
  ${(props) => props.size === "sm" && sm}
`;
const Burger = styled.button`
  ${buttonBase}
  background: transparent;
  border: none;
  display: none;

  display: inline-flex;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const Right = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;
const Icon = styled("div")`
  padding: 0.5rem;
  background: var(--primary-gradient);
  border-radius: 0.75rem;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: #fff;
  }
`;
const Title = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: end;
  position: relative;
  top: 9px;

  h1 {
    font-weight: 700;
    font-size: 1.25rem;
  }
  p {
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem;
    text-transform: capitalize;
  }
`;

export default function NavBar({ toggleSidebar }) {
  const navigate = useNavigate();
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
  const [dark, setDark] = useState(false);
  const [guide, setGuide] = useState("");
  const toggleTheme = () => setDark(!dark);
  const [userType, setUserType] = useState("student");
  useEffect(() => {
    const storedUserType = localStorage.getItem("userType");
    if (storedUserType) {
      setUserType(storedUserType);
    }

    if (userType === "teacher") {
      setGuide("المعلم");
    } else {
      setGuide("الطالب");
    }
  }, [userType]);
  return (
    <Nav className="px-md-5 px-1">
      <Main>
        <Content>
          <Left>
            <Burger onClick={toggleSidebar} className="d-md-none">
              <Menu />
            </Burger>
            <Button onClick={toggleTheme} variant="ghost" size="sm">
              {dark ? <Sun /> : <Moon />}
            </Button>
            <NavButton onClick={handleLogout} className="d-none d-md-flex">
              <LogOut />
              تسجيل الخروج
            </NavButton>
          </Left>
          <Right>
            <Title>
              <h1>منصة التعليم</h1>
              <p>بوابة {guide} </p>
            </Title>
            <Icon>
              <GraduationCap />
            </Icon>
          </Right>
        </Content>
      </Main>
    </Nav>
  );
}
