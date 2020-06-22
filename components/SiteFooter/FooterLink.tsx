import * as React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  color: var(--color-text-secondary);

  &:hover,
  &:focus {
    color: var(--color-text-secondary-hover);
  }
`;

interface FooterLinkProps {
  href: string;
  inner?: boolean;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, inner = false, children }) => {
  if (inner) {
    return (
      <li>
        <Link href={href}>
          <StyledLink href={href}>{children}</StyledLink>
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
