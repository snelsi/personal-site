import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";

export const Modal = styled(Dialog)`
  & .MuiBackdrop-root {
    background-color: transparent;
  }
  & .MuiDialog-paper {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
    background-color: var(--color-surface-2);
    color: var(--color-text-main);

    margin: 56px 32px;
    padding: 12px;
  }
  & .MuiDialog-scrollPaper {
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
  }

  & .MuiDialog-paperFullScreen {
    background-color: var(--color-surface-1);
    margin: 0;
    padding: 12px 5vw;
  }
`;
