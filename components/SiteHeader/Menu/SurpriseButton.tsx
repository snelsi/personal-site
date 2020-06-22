import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { Snackbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { MdClose } from "react-icons/md";
import { FiHeart } from "react-icons/fi";

import { realisticConfetti } from "scripts";
import { MennuButtonWrapper } from "./";

const FixZIndex = createGlobalStyle`
  body > canvas {
    z-index: 10000 !important;
  }
`;

interface SurpriseMenuButtonProps {}

export const SurpriseMenuButton: React.FC<SurpriseMenuButtonProps> = () => {
  const [open, setOpen] = React.useState(false);

  const closeSnackbar = () => setOpen(false);
  return (
    <>
      <MennuButtonWrapper
        onClick={() => {
          realisticConfetti();
          setOpen(true);
        }}
      >
        <div className="menu_button_icon">
          <FiHeart color="var(--color-red-500)" />
        </div>
        <div className="menu_button_title">Support</div>
      </MennuButtonWrapper>
      <FixZIndex />
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        message="Thanks for your support! 😄"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackbar}>
            <MdClose size={20} />
          </IconButton>
        }
      />
    </>
  );
};
