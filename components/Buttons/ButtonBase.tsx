import * as React from "react";
import styled from "@emotion/styled";
import MUIButtonBase, { ButtonBaseProps as MuiButtonBaseProps } from "@material-ui/core/ButtonBase";

export interface ButtonBaseProps extends MuiButtonBaseProps {
  href?: string;
  target?: "_blank";
  rel?: "noopener noreferrer";
}

export const ButtonBase = styled(MUIButtonBase)`
  align-items: center;
  background-color: var(--color-primary);
  border: none;
  border-radius: 0.5rem;
  color: var(--color-text-white);
  cursor: pointer;
  display: flex;
  justify-content: center;
  line-height: 1.5;
  font-size: 1em;
  font-family: Montserrat, var(--sans-family);
  padding: 0.5em 1em;

  text-decoration: none;
  text-align: center;
  transition: var(--transition-ease);
  outline: none;
` as (props: ButtonBaseProps) => React.ReactElement;
