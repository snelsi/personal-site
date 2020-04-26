import * as React from "react";
import styled from "styled-components";

import { Button } from "components";
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

interface AboutProps {}

export const About: React.FC<AboutProps> = () => (
  <Container data-fix-width>
    <MyPhoto />
    <Content>
      <Head />
      <hr />
      <ProfessionalSkills />
      <Stack />
      <Technologies />
      <Tools />
      <hr />
      <Expirience />
      <hr />
      <Languages />
      <Sallery />
      <AboutMyself />
      <hr />
      <Button className="contactButton">Написать мне</Button>
    </Content>
  </Container>
);

const Content = styled.div`
  margin: auto;
  max-width: 640px;
  font-size: 18px;
  line-height: 1.4;

  & > hr {
    border: none;
    background-color: var(--color-borderline);
    height: 1px;
    margin: 1em 0;
    width: 100%;
  }

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
    font-variation-settings: "wght" 600;
    text-align: center;
  }

  & h6 {
    margin-bottom: 1em;
    font-weight: 600;
    font-variation-settings: "wght" 600;
  }

  & p {
    color: var(--color-text-main);
    margin: 0.8em 0;
  }

  & button.contactButton {
    margin: 1em auto;
  }
`;
