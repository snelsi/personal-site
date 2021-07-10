import * as React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Link from "next/link";

import { Image } from "components";

// Illustration from 'Ginger cat' by Icons8: https://icons8.ru/illustrations/illustration/ginger-cat-721
import GingerCat from "public/images/blog/ginger-cat-help-center.png";

const bounceX = keyframes` from { left: 0; } to { left: calc(100% - 112px); }`;
const bounceY = keyframes`from { top: 0; } to { top: calc(100% - 61.06px); }`;
const bounceXMobile = keyframes` from { left: 0; } to { left: calc(100% - 80px); }`;
const bounceYMobile = keyframes`from { top: 0; } to { top: calc(100% - 44.75px); }`;

const Banner = styled.a`
  background: #e6f4ff;
  border-radius: 10px;
  color: #111;
  display: block;

  padding: clamp(16px, 5vw, 32px);
  position: relative;
  text-align: center;
  transition: all 0.15s ease;
  outline: none;

  & > div {
    position: relative;
    z-index: 1;
  }
  & .hire-me-image {
    margin: auto;
    max-width: 320px;
    width: 75vw;
  }

  & h3 {
    color: #000;
    margin: 0.4em auto;
    font-family: Montserrat, var(--sans-family);
    transition: color 0.2s ease;
    width: fit-content;
    white-space: nowrap;

    backdrop-filter: blur(2px);
    border-radius: 1em;
  }
  & p {
    color: #222;
    margin: 0.75em auto 1em;
    font-family: Inter, var(--sans-family);
    line-height: 1.45;
    max-width: 520px;
    width: fit-content;

    backdrop-filter: blur(2px);
    border-radius: 1em;

    @media (max-width: 1020px) {
      max-width: 420px;
    }
  }

  & .bouncer {
    display: block;
    color: var(--color-primary-lighter);
    position: absolute;
    transition: opacity 0.5s ease;

    z-index: 0;

    --x-time: 8.5s;
    --y-time: 10.1s;
    animation: ${bounceX} var(--x-time) linear 0s infinite alternate,
      ${bounceY} var(--y-time) linear 0s infinite alternate;
    width: 112px;

    @media (max-width: 640px) {
      --x-time: 4s;
      --y-time: 6.3s;
      animation: ${bounceXMobile} var(--x-time) linear 0s infinite alternate,
        ${bounceYMobile} var(--y-time) linear 0s infinite alternate;
      width: 80px;
    }

    & svg {
      height: auto;
      width: 100%;
    }
  }

  &:hover,
  &:focus {
    & h3 {
      color: #ff7f3f;
    }
  }
`;

const DvdLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 107" fill="currentColor">
    <path d="M119 20s-14 17-13 18c1-1-5-18-5-18L96 5H22l-2 11h23c13 0 20 5 18 14-2 10-13 14-24 14h-5l6-24H19l-9 35h28c20 0 40-11 44-25 0-3 0-9-2-13v-1h1v1l18 50 44-51h24c12 0 20 5 18 14-3 10-14 14-25 14h-5l6-24h-19l-8 35h27c21 0 40-11 44-25 3-14-12-25-32-25h-41l-13 15zM99 67C47 67 5 73 5 81s42 14 94 14c53 0 95-6 95-14s-42-14-95-14zm-3 19c-12 0-22-2-22-5 0-2 10-4 22-4s22 2 22 4c0 3-10 5-22 5z" />
  </svg>
);

interface HireMeBannerProps {}

export const HireMeBanner: React.FC<HireMeBannerProps> = () => (
  <Link href="/contact" passHref>
    <Banner>
      <span className="bouncer">
        <DvdLogo />
      </span>
      <div>
        <div className="hire-me-image">
          <Image
            src={GingerCat}
            alt="Ginger cat sitting on a computer by Icons8"
            width={400}
            height={300}
            bgColor="transparent"
            noShadow
          />
        </div>
        <div className="hire-me-text">
          <h3 data-font-weight="Bold">Pssst! Need a coder?</h3>
          <p data-font-size="Focus" data-font-weight="500">
            Let&apos;s work together! Tell me about your idea and I&apos;ll help you to make it real
            and gorgeous the best way I know how.
          </p>
        </div>
      </div>
    </Banner>
  </Link>
);
