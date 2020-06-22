import { withStyles } from "@material-ui/core/styles";
import { ButtonBase } from "components/Buttons/ButtonBase";

export const ButtonText = withStyles({
  root: {
    "--base-color": "109, 159, 255",
    "--text-color": "var(--color-primary)",

    backgroundColor: "rgba(var(--base-color), 0)",
    color: "var(--text-color)",

    "&:hover, &:focus": {
      backgroundColor: "rgba(var(--base-color), 0.2)",
      color: "var(--text-color)",
    },
    "&:active": {
      backgroundColor: "rgba(var(--base-color), 0.25)",
      color: "var(--text-color)",
    },
  },
})(ButtonBase);
