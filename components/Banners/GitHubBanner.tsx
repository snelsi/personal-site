import React from "react";
import styled from "styled-components";
import { BannerBase } from "components/Banners";
import { useInView } from "scripts";

const Base = styled.a`
  display: block;

  transition: opacity 1.5s ease-out;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  & .banner {
    background: center center no-repeat url(images/gitHubPromo_small.jpg), var(--color-cool-gray-9);
    background-size: cover;

    & svg {
      top: 0;
      right: 5%;
      height: 100%;
      width: 15vw;
      min-width: 100px;
      max-width: 120px;
    }

    @media (min-width: 710px) {
      background: center center no-repeat url(images/gitHubPromo_large.jpg),
        var(--color-cool-gray-9);
      background-size: cover;

      & svg {
        width: 10vw;
      }
    }

    @media (max-width: 400px) {
      & svg {
        display: none;
      }
    }
  }
`;

export const GitHubBanner: React.FC = () => {
  const { ref, visible } = useInView();

  return (
    <Base
      href="https://github.com/snelsi"
      target="_blank"
      rel="noopener noreferrer"
      data-fix-width
      ref={ref}
      data-visible={visible}
    >
      <BannerBase title="Looking for sources?" label="Check out my GitHub!">
        <svg width="80" height="80" fill="none" viewBox="0 0 80 80">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40 0C17.9 0 0 18.4 0 41a41 41 0 0027.4 39c2 .3 2.7-1 2.7-2v-7c-11.2 2.4-13.6-5.5-13.6-5.5-1.8-4.8-4.4-6-4.4-6-3.6-2.6.3-2.5.3-2.5 4 .3 6.1 4.2 6.1 4.2 3.6 6.3 9.4 4.5 11.7 3.4a9 9 0 012.5-5.5c-8.9-1-18.2-4.5-18.2-20.2a16 16 0 014.1-11A15 15 0 0119 17s3.3-1 11 4.2a38 38 0 0120 0C57.7 16 61 17 61 17a15 15 0 01.4 10.9 16 16 0 014.1 11c0 15.7-9.3 19.2-18.3 20.2 1.5 1.3 2.8 3.8 2.8 7.6V78c0 1 .6 2.3 2.7 2A41 41 0 0080 41C80 18.4 62.1 0 40 0z"
            fill="#fff"
          />
        </svg>
      </BannerBase>
    </Base>
  );
};
