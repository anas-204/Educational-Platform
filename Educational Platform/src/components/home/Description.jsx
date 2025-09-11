import { useNavigate } from "react-router-dom";
import { styled, css } from "styled-components";
import { ArrowLeft } from "lucide-react";
const Para = styled("div")`
  text-align: center;
  animation: fadeIn 0.5s ease-out;
  margin-bottom: 4rem;
  h1 {
    @media (min-width: 768px) {
      font-size: 3.75rem;
      line-height: 1;
    }
    font-size: 3rem;
    line-height: 1.25;
    opacity: 1;
    color: white;
    font-weight: 700;
    margin-bottom: 1.5rem;
    span {
      display: block; 
      background: linear-gradient(
        to right,
        #fde68a,
        #fdba74
      ); /
      -webkit-background-clip: text; 
      -webkit-text-fill-color: transparent; 
      background-clip: text; 
      color: transparent; 
    }
  }

  p {
    color: #ffffffe6;
    line-height: 1.625;
    font-size: 1.25rem;
    max-width: 48rem;
    margin-bottom: 2rem;

  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const Buttoms = styled("div")`
  @media (min-width: 640px) {
    flex-direction: row;
  }
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: column-reverse;
`;

const variants = {
  default: css`
    background: var(--primary-gradient);
    color: var(--primary-foreground);
    &:hover {
      opacity: 0.9;
    }
  `,
  destructive: css`
    background: var(--destructive);
    color: var(--destructive-foreground);
    &:hover {
      background: hsl(0 84% 50%);
    }
  `,
  outline: css`
    border: 1px solid var(--input);
    background: rgb(var(--background));
    color: rgb(var(--foreground));
    &:hover {
      background: var(--accent);
      color: var(--accent-foreground);
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
};

const sizes = {
  default: css`
    height: 40px;
    padding: 0 16px;
    font-size: 0.875rem;
  `,
  sm: css`
    height: 36px;
    padding: 0 12px;
    font-size: 0.8rem;
  `,
  lg: css`
    height: 44px;
    padding: 0 20px;
    font-size: 1rem;
  `,
  icon: css`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 3rem;
  border: none;
  padding: 1.5rem 2rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  ${({ variant }) => variants[variant || "default"]};
  ${({ size }) => sizes[size || "default"]};

  svg {
    height: 1.25rem;
    width: 1.25rem;
    pointer-events: none;
    transform: translateX(0);
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(0.25rem);
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
export default function Description() {
  const navigate = useNavigate();
  return (
    <Para>
      <h1>
        حوّل
        <span className="mt-4">رحلتك التعليمية</span>
      </h1>
      <p className="mx-auto mb-4">
        انضم إلى آلاف الطلاب والمعلمين في منصتنا التعليمية الشاملة. احصل على
        جلسات تفاعلية واختبارات وتتبع تقدمك كما لم يحدث من قبل.
      </p>
      <Buttoms>
        <Button size="xl" variant="outline" onClick={() => navigate("/login")}>
          تسجيل دخول للمتابعة
        </Button>
        <Button size="xl" variant="glass" onClick={() => navigate("/register")}>
          ابدأ التعلم اليوم
          <ArrowLeft />
        </Button>
      </Buttoms>
    </Para>
  );
}
