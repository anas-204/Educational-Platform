import React from "react";
import styled from "styled-components";
const Main = styled.div``;
const Header = styled.div`
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  padding: 1.5rem;
  background: var(--hero-gradient);
  border-radius: 0.75rem;
  border-color: hsl(var(--border));
  h1 {
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: rgba(255, 255, 255, 0.9);
  }
`;
export default function ControlPanel() {
  return (
    <Main className="">
      <Header>
        <h1>أهلاً بك مرة أخرى!</h1>
        <p>مستعد لمتابعة رحلتك التعليمية؟</p>
      </Header>
    </Main>
  );
}
