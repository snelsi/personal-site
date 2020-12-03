import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import MUIButtonBase, { ButtonBaseProps as MUIButtonBaseProps } from "@material-ui/core/ButtonBase";

export interface ButtonBaseProps extends MUIButtonBaseProps {
  component?: any;
}
interface LinkButtonBaseProps extends ButtonBaseProps {
  component: "a";
  href: string;
  target?: "_blank";
  rel?: "noopener noreferrer";
}

export const ButtonBase = withStyles({
  root: {
    alignItems: "center",
    backgroundColor: "var(--color-primary)",
    border: "none",
    borderRadius: "0.5rem",
    color: "var(--color-text-white)",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    lineHeight: "1.5",
    fontSize: "1em",
    fontFamily: "Montserrat, var(--sans-family)",
    padding: "0.5em 1em",

    textDecoration: "none",
    textAlign: "center",
    transition: "var(--transition-ease)",
    outline: "none",
  },
})(MUIButtonBase) as (props: ButtonBaseProps | LinkButtonBaseProps) => React.ReactElement;
