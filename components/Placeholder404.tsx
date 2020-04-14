import * as React from "react";
import styled from "styled-components";

// 'Angry Cats' Illustration by Vecteezy from
// https://www.vecteezy.com/free-vector/pet

interface Placeholder404Props {}

export const Placeholder404: React.FC<Placeholder404Props> = () => (
  <Container>
    <img src="/images/AngryCats.svg" alt="404" />
  </Container>
);

const Container = styled.div`
  height: 70vh;

  & > img {
    display: block;
    object-fit: cover;
    margin: auto;
    min-height: 400px;
    width: 100%;
    height: 100%;

    @media (min-width: 1080px) {
      width: 87.5%;
      object-fit: contain;
    }
  }
`;
