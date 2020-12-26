import * as React from "react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import { FaTelegramPlane } from "react-icons/fa";
import { GoMail } from "react-icons/go";

import styled from "styled-components";
import { Email, SiteFooter, SiteHeader } from "components";
import { useInView } from "scripts";

const Link = styled.a`
  align-items: center;
  background-color: var(--color-gray-1);
  border-radius: 12px;
  box-shadow: var(--shadow);
  color: var(--color-text-white) !important;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 21px;
  font-family: Montserrat, var(--sans-family);
  font-weight: 500;
  font-variation-settings: "wght" 500;
  margin: auto;
  height: 240px;
  overflow: hidden;
  padding: 1em;
  position: relative;
  text-align: center;
  transition: all 0.2s ease-out;

  width: 100%;

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
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const ContactPage: NextPage = () => {
  const { ref, visible } = useInView({ rootMargin: "0px" });

  return (
    <>
      <NextSeo
        title="Roman Zhuravlov - Contact me"
        description="My mail, telegram and contact information."
        canonical="https://www.snelsi.now.sh/contact"
        openGraph={{
          url: "https://www.snelsi.now.sh/contact",
          title: "Roman Zhuravlov - Contact me",
          description: "My mail, telegram and contact information.",
        }}
      />
      <SiteHeader />
      <Main>
        <div>
          <Cards data-fix-width ref={ref} data-visible={visible}>
            <h2 className="montserrat">Let&apos;s talk! </h2>
            <p>
              Write to me about anything! I&apos;m always happy to answer and provide you my
              professional help.
            </p>
            <div className="cards">
              <Link
                href="http://t.me/snelsi"
                target="_blank"
                rel="noopener noreferrer"
                className="telegram"
              >
                <FaTelegramPlane size={24} />
                <div>Telegram for friends</div>
              </Link>
              <Link
                href="mailto:hey@snelsi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="email"
              >
                <GoMail size={24} />
                <div>Email for customers</div>
              </Link>
            </div>
          </Cards>
          <Email data-fix-width />
        </div>
      </Main>
      <SiteFooter />
    </>
  );
};

const Main = styled.main`
  margin-top: 1.25em;
  margin-bottom: 1.25em;
`;

const Cards = styled.div`
  min-height: 50vh;
  padding: 10vh 0;
  text-align: center;

  transition: opacity 1.5s ease-out;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  & > p {
    margin: 24px auto 48px;
    max-width: 500px;
    line-height: 1.4;
    font-size: 19px;
  }

  & > .cards {
    align-items: center;
    display: grid;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    margin-left: auto;
    margin-right: auto;
    max-width: 920px;

    @media (max-width: 420px) {
      grid-template-columns: 1fr;
    }

    & .telegram {
      background-color: var(--color-blue-400);
    }

    & .email {
      background-color: var(--color-gray-8);
    }
  }
`;

export default ContactPage;
