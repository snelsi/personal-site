import * as React from "react";
import Link from "next/link";

import { withStyles } from "@material-ui/core/styles";
import { ButtonBase } from "components/Buttons";

export const MennuButtonWrapper = withStyles({
  root: {
    backgroundColor: "transparent",
    borderRadius: "0.25em",
    color: "var(--color-text-main)",
    flexDirection: "column",
    fontWeight: 500,
    padding: "1em",

    "&:hover, &:focus": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      color: "var(--color-text-main)",
    },

    "& .menu_button_icon": {
      width: "32px",
      height: "32px",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      "& svg": {
        width: "24px",
        height: "24px",
      },
    },

    "& .menu_button_title": {
      fontSize: "0.875em",
      fontWeight: 500,
      marginTop: "0.25em",
    },
  },
})(ButtonBase);

interface MennuButtonProps {
  href: string;
  title: string;
  outside?: boolean;
}

export const MennuButton: React.FC<MennuButtonProps> = ({
  href,
  title,
  children,
  outside = false,
}) => {
  if (outside) {
    return (
      <MennuButtonWrapper component="a" href={href}>
        <div className="menu_button_icon">{children}</div>
        <div className="menu_button_title">{title}</div>
      </MennuButtonWrapper>
    );
  }

  return (
    <Link href={href}>
      <MennuButtonWrapper component="a" href={href}>
        <div className="menu_button_icon">{children}</div>
        <div className="menu_button_title">{title}</div>
      </MennuButtonWrapper>
    </Link>
  );
};
