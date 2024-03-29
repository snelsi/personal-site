import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Button, Image } from "components";
import { calculateYearSince, useInView } from "scripts";

import Me from "public/images/about/me.jpg";

const Block = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  max-width: 1440px;

  transition: opacity 1.5s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

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
      margin-bottom: 0.6em;

      @media (min-width: 1021px) and (max-width: 1440px) {
        font-size: 4.5vw;
      }

      @media (min-width: 800px) and (max-width: 1020px) {
        font-size: 6.5vw;
      }
    }
    & > h2 {
      margin-bottom: 1.15em;
      max-width: 14em;
    }
    & > p {
      max-width: 600px;
    }

    & > .aside {
      margin: 1.5em 0 2em;
      max-width: 360px;
    }

    & .contactButton {
      margin-top: 1.5em;
      background-color: var(--color-gray-9);
      color: var(--color-white);
      letter-spacing: normal;
      width: fit-content;
    }
  }

  & > .imageWrapper {
    max-width: 420px;
    width: 100%;
    height: 100%;
  }
`;

interface IntroProps {}

export const Intro: React.FC<IntroProps> = () => {
  const { visible, ref } = useInView({ rootMargin: "0px" });

  return (
    <Block className="block" ref={ref} data-visible={visible}>
      <div className="text-block">
        <h1 className="montserrat">Roman Zhuravlov</h1>
        <h2 data-font-size="XL">Frontend web developer and UI/UX designer</h2>
        <p>
          Hey! I am {calculateYearSince(new Date("April 22 2000"))} years old web developer from
          Ukraine. I specialize in client interfaces, functional components and their internal
          logic. I create modern, beautiful, and accessible websites and apps. My goal is to help
          companies around the world to build their brand and turn incoming people into happy
          customers.
        </p>
        <p className="aside">
          Let&apos;s work together! I&apos;m always happy to provide you my professional help.
        </p>
        <Link href="/contact" passHref>
          <Button className="contactButton">Contact me</Button>
        </Link>
      </div>
      <div className="imageWrapper">
        <Image src={Me} alt="Me" width={575} height={690} priority />
      </div>
    </Block>
  );
};
