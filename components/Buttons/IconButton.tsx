import { withStyles } from "@material-ui/core/styles";
import { ButtonText } from "components/Buttons";

export const IconButton = withStyles({
  root: {
    "--base-color": "var(--color-button-gray)",
    "--text-color": "var(--color-text-main)",

    height: "3rem",
    width: "3rem",
    padding: "0.75rem",

    "& > img, & > svg": {
      height: "1.5rem",
      width: "1.5rem",
    },
  },
})(ButtonText);
