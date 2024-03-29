import * as React from "react";

import { Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { MdClose } from "react-icons/md";
import { FiHeart } from "react-icons/fi";

import { realisticConfetti } from "scripts";
import { MenuButtonWrapper } from "./";

interface SurpriseMenuButtonProps {}

export const SurpriseMenuButton: React.FC<SurpriseMenuButtonProps> = () => {
  const [open, setOpen] = React.useState(false);

  const closeSnackbar = () => setOpen(false);
  return (
    <>
      <MenuButtonWrapper
        onClick={() => {
          realisticConfetti();
          setOpen(true);
        }}
      >
        <div className="menu_button_icon">
          <FiHeart color="var(--color-red-500)" />
        </div>
        <div className="menu_button_title">Support</div>
      </MenuButtonWrapper>
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
