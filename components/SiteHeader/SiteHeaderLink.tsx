import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { ButtonText } from "components";

const HeaderLinkContainer = styled.div`
  && {
    position: relative;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    & a {
      color: var(--color-text-main);
      font-size: 17px;
      font-weight: 500;
      height: 40px;

      &:hover,
      &:focus {
        color: var(--color-text-main);
      }

      font-variation-settings: "wght" 500;
      white-space: nowrap;

      &:not(:last-child) {
        margin-right: 4px;
      }
    }

    &[data-matched="true"]:after {
      content: "";
      position: absolute;
      left: 1em;
      right: 1em;
      bottom: 0;
      height: 2px;
      background-color: var(--color-primary);
    }
  }
`;

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
}
export const SiteHeaderLink: React.FC<HeaderLinkProps> = ({ href, children }) => {
  const router = useRouter();

  return (
    <li>
      <HeaderLinkContainer data-matched={href === router.route} className="HeaderLinkContainer">
        <Link href={href} passHref>
          <ButtonText>{children}</ButtonText>
        </Link>
      </HeaderLinkContainer>
    </li>
  );
};
