import * as React from "react";
import styled from "styled-components";

import Link from "next/link";

import { BubblesBackground } from "../BubblesBackground";
import { Button } from "components";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => (
  <div className="block">
    <Container>
      <BubblesBackground />

      <div>
        <h4 data-font-size="Large" className="montserrat">
          Let&apos;s talk!
        </h4>
        <div>
          Write to me about anything. I&apos;m always happy to answer and provide you my professional
          help.
        </div>
      </div>
      <Link href="/contact">
        <Button>Contact me</Button>
      </Link>
    </Container>
  </div>
);

const Container = styled.div`
  width: 100%;
  max-width: 920px;
  border-radius: 24px;

  background: linear-gradient(108.43deg, #ff90c6 0%, #c2b1ff 100%);
  color: white;

  padding: 2em 4em;
  margin: auto;
  min-height: 240px;

  align-items: center;
  display: flex;
  justify-content: space-between;

  position: relative;
  overflow: hidden;

  @media (max-width: 800px) {
    flex-direction: column;

    & > div {
      padding-right: 0;
    }
    & > button {
      margin-top: 1.5em;
    }
  }

  & > div {
    text-align: left;
    z-index: 1;
    padding-right: 40px;
    & > h4 {
      margin-bottom: 0.4em;
    }
    & > div {
      font-weight: 400;
      font-size: 19px;
      line-height: 1.5;
      max-width: 500px;
    }
  }
  & > button {
    background-color: #ff7ec3;
    border-radius: 12px;
    height: 60px;
    font-size: 22px;
    padding: 0 32px;
    z-index: 1;
    white-space: nowrap;
  }
`;
