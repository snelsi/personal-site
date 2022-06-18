import * as React from "react";
import Link from "next/link";

import styled from "@emotion/styled";
import { ButtonBase } from "components/Buttons";

export const MenuButtonWrapper = styled(ButtonBase)`
  && {
    background-color: transparent;
    border-radius: 0.25em;
    color: var(--color-text-main);
    flex-direction: column;
    font-weight: 500;
    padding: 1em;

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.1);
      color: var(--color-text-main);
    }

    & .menu_button_icon {
      width: 32px;
      height: 32px;
      align-items: center;
      display: flex;
      justify-content: center;
      & svg {
        width: 24px;
        height: 24px;
      }
    }

    & .menu_button_title {
      font-size: 0.875em;
      font-weight: 500;
      margin-top: 0.25em;
    }
  }
`;

interface MenuButtonProps {
  href: string;
  title: string;
  outside?: boolean;
  children: React.ReactNode;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  href,
  title,
  children,
  outside = false,
}) => {
  if (outside) {
    return (
      <MenuButtonWrapper href={href}>
        <div className="menu_button_icon">{children}</div>
        <div className="menu_button_title">{title}</div>
      </MenuButtonWrapper>
    );
  }

  return (
    <Link href={href} passHref>
      <MenuButtonWrapper>
        <div className="menu_button_icon">{children}</div>
        <div className="menu_button_title">{title}</div>
      </MenuButtonWrapper>
    </Link>
  );
};
