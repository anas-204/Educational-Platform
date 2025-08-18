import React, { useState } from "react";
import styled, { css } from "styled-components";
import { GraduationCap, Sun, Moon, LogOut, Menu } from "lucide-react";
import Swal from "sweetalert2";
const Nav = styled("nav")`
  background-color: hsl(var(--card));
  border-bottom: 1px solid hsl(var(--border));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
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

const Rigth = styled.div`
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

const Titel = styled("div")`
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
  
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  return (
    <Nav>
      <Main>
        <Content>
          <Left>
            <Burger onClick={toggleSidebar}>
              <Menu />
            </Burger>
            <Button onClick={toggleTheme} variant="ghost" size="sm">
              {dark ? <Sun /> : <Moon />}
            </Button>
          </Left>
          <Rigth>
            <Titel>
              <h1>منصة التعليم</h1>
              <p>بوابة الطالب</p>
            </Titel>
            <Icon>
              <GraduationCap />
            </Icon>
          </Rigth>
        </Content>
      </Main>
    </Nav>
  );
}
