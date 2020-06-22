import { withStyles } from "@material-ui/core/styles";
import { ButtonBase } from "components/Buttons/ButtonBase";

export const Button = withStyles({
  root: {
    backgroundColor: "var(--color-primary)",
    borderRadius: "4px",
    color: "var(--color-text-white)",
    fontSize: "1.25em",
    padding: "0.5em 2em",

    "@media (max-width: 640px)": {
      fontSize: "1.125em",
    },
    "&:focus": {
      boxShadow: "0 0 2px 2px var(--color-primary-lighter)",
    },
  },
})(ButtonBase);
