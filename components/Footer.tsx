import * as React from "react";
import styled from "styled-components";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const date = new Date();
  return (
    <FooterBase>
      <div className="copyright">
        Roman Zhuravlov
        <br />© 2019 - {date.getFullYear()}
      </div>
    </FooterBase>
  );
};

const FooterBase = styled.footer`
  border-top: 1px solid #e7e9f5;
  padding: 2em var(--block-inner-padding) 2em;
  text-align: center;
`;
