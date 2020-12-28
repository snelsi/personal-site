import { styled } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

export const Modal = styled(Dialog)({
  "& .MuiBackdrop-root": {
    backgroundColor: "transparent",
  },
  "& .MuiDialog-paper": {
    boxShadow: "0 1px 2px 0 rgba(60,64,67,.30), 0 2px 6px 2px rgba(60,64,67,.15)",
    backgroundColor: "var(--color-surface-2)",
    color: "var(--color-text-main)",

    margin: "56px 32px",
    padding: "12px",
  },
  "& .MuiDialog-scrollPaper": {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "flex-end",
  },

  "& .MuiDialog-paperFullScreen": {
    backgroundColor: "var(--color-surface-1)",
    margin: 0,
    padding: "12px 5vw",
  },
});
