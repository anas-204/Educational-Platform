import React from "react";
import { styled } from "styled-components";
import Description from "./Description";
import Cards from "./Crads";
const HomePage = styled("div")`
  padding: 5rem 1.5rem;
`;
const Main = styled("div")`
  max-width: 80rem;
  margin: 0 auto;
`;

export default function Hero() {
  return (
    <HomePage>
      <Main>
        <Description />
        <Cards />
      </Main>
    </HomePage>
  );
}
