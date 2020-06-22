import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { FaTelegramPlane } from "react-icons/fa";
import { GoMail } from "react-icons/go";

import styled from "styled-components";
import { Email, SiteFooter, SiteHeader } from "components";

const Link = styled.a`
  align-items: center;
  background-color: var(--color-gray-1);
  border-radius: 20px;
  box-shadow: var(--shadow);
  color: var(--color-text-white) !important;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: Montserrat, var(--sans-family);
  overflow: hidden;
  padding: 25% 0.75em;
  text-align: center;
  transition: var(--transition-ease);

  max-width: 240px;
  margin: auto;
  width: 100%;
  font-size: 20px;

  & > svg {
    --size: 100px;
    width: var(--size);
    height: var(--size);
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    & > svg {
      --size: 80px;
    }
  }

  &:hover,
  &:focus {
    box-shadow: var(--shadow-hover);
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const ContactPage: NextPage = () => (
  <>
    <Head>
      <title>Roman Zhuravlov - Contact me</title>
    </Head>
    <SiteHeader />
    <Main>
      <div>
        <Cards data-fix-width>
          <h2 className="montserrat">Let&apos;s talk! </h2>
          <p>
            Write to me about anything. I&apos;m always happy to answer and give you my professional
            help.
          </p>
          <div className="cards" data-fix-width>
            <Link
              href="http://t.me/snelsi"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram"
            >
              <FaTelegramPlane size={24} color="#fff" />
              <div>Telegram for friends</div>
            </Link>
            <Link
              href="mailto:contact@snelsi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="email"
            >
              <GoMail size={24} color="#fff" />
              <div>Email for customers</div>
            </Link>
          </div>
        </Cards>
        <Email />
      </div>
    </Main>
    <SiteFooter />
  </>
);

const Main = styled.main`
  margin-top: 1.25em;
  margin-bottom: 1.25em;
`;

const Cards = styled.div`
  min-height: 50vh;
  padding: 10vh 0;
  text-align: center;

  & > p {
    max-width: 420px;
    margin: 24px auto 48px;
  }

  & > .cards {
    display: grid;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    @media (min-width: 641px) {
      grid-template-columns: 240px 240px;
    }
    @media (max-width: 640px) {
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }
    @media (max-width: 440px) {
      max-width: 240px;
    }

    & .telegram {
      background-color: var(--color-blue-300);
    }

    & .email {
      background-color: var(--color-gray-8);
    }
  }
`;

export default ContactPage;
