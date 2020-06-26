import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button, ButtonOutlined } from "components/Buttons";

interface ButtonsProps {}

export const Buttons: React.FC<ButtonsProps> = () => (
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
    width: 180px;
    border-radius: 4px;
    font-size: 18px;
    padding: 0.5em 0;
  }

  @media (max-width: 720px) {
    grid-auto-flow: row;
    gap: 12px;
    justify-content: center;
    margin: auto;

    & button,
    & a {
      --base-color: var(--colot-magenta-500);
      width: 260px;
    }
  }
`;
