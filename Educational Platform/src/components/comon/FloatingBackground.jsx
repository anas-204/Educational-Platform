import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const FloatingBackground = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${float} 4s ease-in-out infinite;
`;

export default function BgBubbles() {
  return (
    <FloatingBackground>
      <Circle
        style={{ top: "5rem", right: "2.5rem", width: "5rem", height: "5rem" }}
      />
      <Circle
        style={{
          top: "10rem",
          left: "5rem",
          width: "4rem",
          height: "4rem",
          animationDelay: "1s",
        }}
      />
      <Circle
        style={{
          bottom: "8rem",
          right: "25%",
          width: "3rem",
          height: "3rem",
          animationDelay: "2s",
        }}
      />
      <Circle
        style={{
          bottom: "5rem",
          left: "2.5rem",
          width: "6rem",
          height: "6rem",
          animationDelay: "0.5s",
        }}
      />
    </FloatingBackground>
  );
}
