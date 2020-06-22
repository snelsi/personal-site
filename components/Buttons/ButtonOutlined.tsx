import { withStyles } from "@material-ui/core/styles";
import { ButtonBase } from "components/Buttons/ButtonBase";

export const ButtonOutlined = withStyles({
  root: {
    background: "none",
    border: "1px solid var(--color-primary)",
    color: "var(--color-text-primary)",
    width: "fit-content",

    "&:hover, &:focus": {
      background: "none",
      color: "var(--color-text-white)",
    },
    "&:focus": {
      background: "none",
    },
    "&:active": {
      background: "none",
    },
  },
})(ButtonBase);
