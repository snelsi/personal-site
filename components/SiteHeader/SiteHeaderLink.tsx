import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { ButtonText } from "components";

const HeaderLinkContainer = styled.div`
  padding: 0.5em 0;
  position: relative;

  & a,
  & button {
    min-height: 3rem;
  }

  & a {
    --base-color: var(--color-button-gray);
    --text-color: var(--color-text-main);

    font-size: 1.125em;
    font-weight: 500;
    font-variation-settings: "wght" 500;
    white-space: nowrap;

    &:not(:last-child) {
      margin-right: 4px;
    }
  }

  &[data-matched="true"]:after {
    font-size: 1.125em;
    content: "";
    position: absolute;
    left: 1em;
    right: 1em;
    bottom: 0;
    height: 3px;
    background-color: var(--color-blue-6);
  }
`;

interface HeaderLinkProps {
  href: string;
}
export const SiteHeaderLink: React.FC<HeaderLinkProps> = ({ href, children }) => {
  const router = useRouter();
  return (
    <HeaderLinkContainer data-matched={href === router.route} className="HeaderLinkContainer">
      <Link href={href}>
        <ButtonText component="a" href={href}>
          {children}
        </ButtonText>
      </Link>
    </HeaderLinkContainer>
  );
};
