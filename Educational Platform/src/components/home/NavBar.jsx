import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
const Nav = styled("nav")`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;
const Main = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;    
}`;
const variants = {
  destructive: css`
    background: var(--destructive);
    color: var(--destructive-foreground);
    &:hover {
      background: hsl(0 84% 50%);
    }
  `,

  glass: css`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  `,
  ghost: css`
    background: transparent;
    color: white;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  `,
};

const sizes = {
  default: css`
    height: 40px;
    padding: 0 16px;
    font-size: 0.875rem;
  `,
};

const Button = styled.button`
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;

  ${({ variant }) => variants[variant || "default"]};
  ${({ size }) => sizes[size || "default"]};

  svg {
    height: 1rem;
    width: 1rem;
    pointer-events: none;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
const Titel = styled("div")`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  span {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.75rem;
    color: #ffffff;
    opacity: 1;
  }
`;
const Icon = styled("div")`
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: #ffffff;
    display: block;
    vertical-align: middle;
  }
`;
const Buttoms = styled("div")`
  gap: 1rem;
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    gap: 0.5rem;
  }
`;

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <Nav className="">
        <Main className="">
          <Titel>
            <Icon>
              <GraduationCap />
            </Icon>
            <span>منصة التعليم</span>
          </Titel>
          <Buttoms>
            <Button variant="ghost" onClick={() => navigate("/login")}>
              تسجيل دخول
            </Button>
            <Button variant="glass" onClick={() => navigate("/register")}>
              ابدأ الآن
            </Button>
          </Buttoms>
        </Main>
      </Nav>
    </>
  );
}
