import * as React from "react";
import styled from "styled-components";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({ children }) => {
  const date = new Date();
  return (
    <FooterBase>
      <div data-dix-width>
        {children}
        <div className="copyright">
          Roman Zhuravlov
          <br />© 2019 - {date.getFullYear()}
        </div>
      </div>
    </FooterBase>
  );
};

const FooterBase = styled.footer`
  border-top: 1px solid var(--color-borderline);
  padding: 2em 0;
  text-align: center;
`;
