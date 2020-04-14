import { withStyles } from "@material-ui/core/styles";
import { ButtonBase } from "components/Buttons/ButtonBase";

export const ButtonOutlined = withStyles({
  root: {
    background: "none",
    border: "1px solid var(--color-blue-6)",
    color: "var(--color-blue-6)",
    width: "fit-content",

    "&:hover, &:focus": {
      backgroundColor: "var(--color-blue-6)",
      color: "var(--color-text-white)",
    },
    "&:focus": {
      boxShadow: "0 0 2px 2px var(--color-blue-4)",
    },
    "&:active": {
      backgroundColor: "var(--color-blue-7)",
    },
  },
})(ButtonBase);
