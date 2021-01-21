import * as React from "react";
import styled from "styled-components";

const Banner = styled.div`
  align-items: center;
  background-color: var(--cool-gray-9);
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: flex;
  height: 30vw;
  max-height: 220px;
  min-height: 180px;
  text-decoration: none;
  overflow: hidden;
  padding: 12px clamp(20px, 3vw, 40px);
  position: relative;

  & .main {
    align-items: center;
    display: grid;
    grid-gap: 8px;
    white-space: nowrap;
    z-index: 1;
  }

  & svg,
  & img {
    position: absolute;
    top: 12px;
    right: 24px;
    z-index: 0;
  }
`;

interface BunnerBaseProps {
  title: string;
  label?: string;
}
export const BannerBase: React.FC<BunnerBaseProps> = ({ children, title, label }) => (
  <Banner className="banner">
    <div className="main">
      <h5 data-font-size="XL" className="montserrat">
        {title}
      </h5>
      {label && (
        <p data-font-size="Focus" className="text-secondary">
          {label}
        </p>
      )}
    </div>
    {children}
  </Banner>
);
