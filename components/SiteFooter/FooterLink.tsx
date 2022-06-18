import * as React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const StyledLink = styled.a`
  && {
    color: var(--color-text-secondary);

    &:hover,
    &:focus {
      color: var(--color-text-secondary-hover);
    }
  }
`;

interface FooterLinkProps {
  href: string;
  inner?: boolean;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, inner = false, children }) => {
  if (inner) {
    return (
      <li>
        <Link href={href} passHref>
          <StyledLink>{children}</StyledLink>
        </Link>
      </li>
    );
  }
  return (
    <li>
      <StyledLink href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledLink>
    </li>
  );
};
