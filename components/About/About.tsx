import * as React from "react";
import styled from "styled-components";
import { Button, ButtonText } from "components";

import {
  AboutMyself,
  Container,
  Expirience,
  Head,
  Languages,
  MyPhoto,
  ProfessionalSkills,
  Sallery,
  Stack,
  Technologies,
  Tools,
} from "components/About";

import Link from "next/link";

interface AboutProps {}

export const About: React.FC<AboutProps> = () => (
  <Container data-hide>
    <header>
      <Link href="/">
        <a href="/">Back</a>
      </Link>
    </header>
    <MyPhoto />
    <Content>
      <Head />
      <ProfessionalSkills />
      <Stack />
      <Technologies />
      <Tools />
      <Expirience />
      <Languages />
      <Sallery />
      <AboutMyself />
    </Content>
    <footer>
      <Button>Написать</Button>
    </footer>
  </Container>
);

interface AboutExpressProps {}

export const AboutExpress: React.FC<AboutExpressProps> = () => (
  <Container>
    <MyPhoto />
    <Content>
      <Head />
      <AboutMyself />
    </Content>
    <footer>
      <Link href="/about">
        <ButtonText as="a" href="/about">
          Подробнее
        </ButtonText>
      </Link>
    </footer>
  </Container>
);

const Content = styled.div`
  margin: auto;
  max-width: 640px;
  font-size: 18px;
  line-height: 1.4;

  & .block {
    margin: 1em 0 1.5em;
  }

  & .no-wrap {
    white-space: nowrap;
  }

  & h5 {
    margin: 1em auto;
    max-width: 460px;
    font-weight: 600;
    text-align: center;
  }

  & h6 {
    margin-bottom: 0.8em;
    font-weight: 500;
  }

  & p {
    color: #333;
    margin: 0.8em 0;
  }
`;
