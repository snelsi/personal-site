import { withStyles } from "@material-ui/core/styles";
import { ButtonBase } from "components/Buttons/ButtonBase";

export const Button = withStyles({
  root: {
    backgroundColor: "var(--color-blue-6)",
    color: "var(--color-text-white)",
    fontSize: "1.25em",
    padding: "0.5em 2em",

    "@media (max-width: 640px)": {
      fontSize: "1.125em",
    },
    "&:hover, &:focus": {
      transform: "scale(1.04)",
    },
    "&:focus": {
      boxShadow: "0 0 2px 2px var(--color-blue-4)",
    },
    "&:active": {
      transform: "scale(0.96)",
    },
  },
})(ButtonBase);
