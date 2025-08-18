import React from "react";
import NavBar from "../src/components/home/NavBar";
import Hero from "../src/components/home/Hero";
import FloatingBackground from "../src/components/comon/FloatingBackground";
import styled from "styled-components";
const HomePage = styled("div")`
  background: var(--hero-gradient);
  min-height: 100vh;
`;

export default function Home() {
  return (
    <HomePage className="">
      <NavBar />
      <Hero />
      <FloatingBackground />
    </HomePage>
  );
}
