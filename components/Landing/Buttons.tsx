import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Button, ButtonOutlined } from "components/Buttons";

interface ButtonsProps {}

export const Buttons: React.FC<ButtonsProps> = () => (
  <Container aria-label="actions">
    <li>
      <Link href="/contact">
        <Button className="contact">Contact me</Button>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <ButtonOutlined className="about">My Resume</ButtonOutlined>
      </Link>
    </li>
  </Container>
);

const Container = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: 24px;
  width: fit-content;

  & .contact {
    background-color: var(--color-magenta-500);
    color: var(--color-text-white);
  }

  & .about {
    border-color: var(--color-magenta-500);
    color: var(--color-magenta-500);
    &:hover,
    &:focus {
      color: var(--color-magenta-500);
    }
    &:active {
      color: var(--color-magenta-500);
    }
  }

  & button,
  & a {
    border-radius: 4px;
    font-size: 18px;
    max-width: 100%;
    padding: 0.5em 0;
    width: 180px;
  }

  @media (max-width: 720px) {
    gap: 12px;
    grid-auto-flow: row;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    justify-content: center;

    & button,
    & a {
      --base-color: var(--color-magenta-500);
      width: 250px;
    }
  }
  @media (max-width: 420px) {
    grid-template-columns: minmax(0, 1fr);
    margin: unset;
    width: 100%;
    & button,
    & a {
      width: 100%;
    }
  }
`;
