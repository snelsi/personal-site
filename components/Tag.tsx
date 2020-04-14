import { withStyles } from "@material-ui/core/styles";
import { ButtonText } from "components/Buttons";

export const Tag = withStyles({
  root: {
    "--text-color": "var(--color-blue-5)",
    "--base-color": "69, 137, 255",
    borderRadius: "1rem",

    backgroundColor: "rgba(69, 137, 255, 0.3)",

    display: "inline-block",
    fontWeight: 400,
    marginRight: 12,
    lineHeight: "1.4em",
    fontSize: "0.8em",
    padding: "0.25em 1em",
  },
})(ButtonText);
