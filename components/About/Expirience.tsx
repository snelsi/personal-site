import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

import AwesomeSlider from "react-awesome-slider";

const SliderStyles = createGlobalStyle`
  .awssld {
    --slider-height-percentage: 75%;
    --slider-transition-duration: 250ms;
    --loader-bar-color: var(--color-blue-500);

    --control-bullet-color: var(--color-gray-5);
    --control-bullet-active-color: var(--color-gray-8);

    --loader-bar-height: 4px;

    & .awssld__bullets button {
      width: 12px;
      height: 12px;
    }

    & .awssld__bullets .awssld__bullets--active {
      transform: scale(1);
    }
  }
`;

const Wrapper = styled.div`
  gap: 48px;
  display: grid;

  @media (min-width: 800px) {
    grid-template-columns: 4fr 3fr;
    align-items: center;
  }
`;

interface ExpirienceProps {}

export const Expirience: React.FC<ExpirienceProps> = () => (
  <Wrapper className="block">
    <div>
      <SliderStyles />
      <AwesomeSlider>
        <div data-src="images/about/App1.jpg" />
        <div data-src="images/about/App2.jpg" />
        <div data-src="images/about/App3.jpg" />
        <div data-src="images/about/App4.jpg" />
        <div data-src="images/about/App5.jpg" />
      </AwesomeSlider>
    </div>
    <div className="text-block" data-right>
      <h3>Experience</h3>
      <p>
        I am freelancing in web-development since 2019. I have worked in every stage of projects
        life-cycle. Was conducting interviews with the customers and drafting the terms of
        reference. Developed a technical systems and UI designs. Designed databases and endpoints.
        Wrote a tonn of front-end code. Participated in the development of the &lsquo;Scalpio&lsquo;
        crypto-currency bot as a UI/UX designer and project manager. Created the PWA for car rental
        company as a full-stack developer.
      </p>
    </div>
  </Wrapper>
);
