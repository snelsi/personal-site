import * as React from "react";
import styled from "styled-components";

import Link from "next/link";

import { Button, Image } from "components";
import { calculateYearSince } from "scripts";

const Block = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  max-width: 1440px;

  @media (min-width: 1020px) {
    & > .imageWrapper {
      margin-left: 10vw;
    }
  }
  @media (max-width: 1019px) {
    flex-direction: column-reverse;

    & > .imageWrapper {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 6vw;

      padding: 5vw;
    }
  }

  & > .text-block {
    margin-right: 0 !important;
    max-width: 1000px;
    width: fit-content;

    & > h1 {
      white-space: nowrap;
      margin-bottom: 0.5em;

      @media (min-width: 1021px) and (max-width: 1440px) {
        font-size: 4.5vw;
      }

      @media (min-width: 800px) and (max-width: 1020px) {
        font-size: 6.5vw;
      }
    }
    & > h3 {
      margin-bottom: 1.4em;
      max-width: 14em;
    }
    & > p {
      max-width: 600px;
    }

    & > .aside {
      margin: 1.5em 0;
      max-width: 360px;
    }

    & button {
      margin-top: 1.5em;
      background-color: var(--color-gray-9);
    }
  }

  & > .imageWrapper {
    max-width: 420px;
    width: 100%;
    height: 100%;
  }
`;

interface IntroProps {}

export const Intro: React.FC<IntroProps> = () => (
  <Block className="block">
    <div className="text-block">
      <h1 className="montserrat">Roman Zhuravlov</h1>
      <h3>Frontend web developer and UI/UX designer</h3>
      <p>
        Hey! I am {calculateYearSince(new Date("April 22 2000"))} years old web developer from
        Ukraine. I specialize in client interfaces, functional components and their internal logic.
        I create modern, beautiful, and accessible websites and apps. My goal is to help companies
        around the world to build their brand and turn incoming people into happy customers.
      </p>
      <p className="aside">
        Let&apos;s work together! I&apos;m always happy to provide you my professional help.
      </p>
      <Link href="/contact">
        <Button>Contact me</Button>
      </Link>
    </div>
    <div className="imageWrapper">
      <Image src="about/me.jpg" alt="Me" ratio={120} />
    </div>
  </Block>
);
