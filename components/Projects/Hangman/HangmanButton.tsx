import ButtonBase from "@material-ui/core/ButtonBase";
import { styled } from "@material-ui/core/styles";

export const HangmanButton = styled(ButtonBase)({
  backgroundColor: "#4e54c8",
  border: "none",
  borderRadius: "24px",
  cursor: "pointer",
  color: "#fff",
  height: "40px",
  fontFamily: "inherit",
  fontSize: "1rem",
  outline: "none",
  textTransform: "none",
  transition: "all 0.15s ease-in-out",
  width: "100%",

  "&:hover": {
    backgroundColor: "#393fb7",
  },

  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(105, 110, 208, 0.5)",
  },

  "&:active": {
    backgroundColor: "#363cad",
  },
});
