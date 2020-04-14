import { withStyles } from "@material-ui/core/styles";
import { ButtonBase } from "components/Buttons/ButtonBase";

export const ButtonText = withStyles({
  root: {
    "--base-color": "166, 200, 255",
    "--text-color": "var(--color-blue-5)",

    backgroundColor: "rgba(var(--base-color), 0)",
    color: "var(--text-color)",
    fontSize: "1em",
    padding: "0.5em 1em",

    "&:hover, &:focus": {
      backgroundColor: "rgba(var(--base-color), 0.3)",
      color: "var(--text-color)",
    },
    "&:active": {
      backgroundColor: "rgba(var(--base-color), 0.75)",
      color: "var(--text-color)",
    },
  },
})(ButtonBase);
