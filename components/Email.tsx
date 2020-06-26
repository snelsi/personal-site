import * as React from "react";
import styled from "styled-components";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { MdClose } from "react-icons/md";

import { CopyToClipboard } from "react-copy-to-clipboard";

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 10vh;

  & > h6 {
    margin-bottom: 0.5em;
  }

  & > address > button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;
interface EmailProps {}

export const Email: React.FC<EmailProps> = () => {
  const [open, setOpen] = React.useState(false);

  const closeSnackbar = () => setOpen(false);

  return (
    <Wrapper>
      <h6>Or just send me a letter:</h6>
      <address>
        <CopyToClipboard text="commerce@snelsi.com" onCopy={() => setOpen(true)}>
          <button data-font-size="XL">commerce@snelsi.com</button>
        </CopyToClipboard>
      </address>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        message="Copied to clipboard!"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackbar}>
            <MdClose size={20} />
          </IconButton>
        }
      />
    </Wrapper>
  );
};
