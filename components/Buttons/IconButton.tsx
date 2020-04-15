import { withStyles } from "@material-ui/core/styles";
import { ButtonText } from "components/Buttons";

export const IconButton = withStyles({
  root: {
    "--base-color": "var(--color-button-gray)",
    "--text-color": "var(--color-text-main)",

    fontSize: "1.5rem",

    height: "2em",
    width: "2em",
    padding: "0.5em",

    "&[data-size=small]": {
      fontSize: "1rem",
    },
    "&[data-size=medium]": {
      fontSize: "1.25rem",
    },
    "&[data-size=normall]": {
      fontSize: "1.5rem",
    },
    "&[data-size=big]": {
      fontSize: "2rem",
    },

    "& > img, & > svg": {
      height: "1em",
      width: "1em",
    },
  },
})(ButtonText);
