import * as React from "react";
import styled from "styled-components";

import { CloseButton, MennuButton, Modal, ThemeSwitcher } from "components/SiteHeader/Menu";

import { FiBook, FiGithub, FiMic, FiUser, FiHeart, FiFolder, FiPhone } from "react-icons/fi";

import { useMediaQuery } from "@material-ui/core";

interface MenuProps {
  open: boolean;
  closeDialog: () => void;
}

export const Menu: React.FC<MenuProps> = ({ open, closeDialog }) => {
  const isMobile = useMediaQuery("(max-width: 720px)");

  return (
    <Modal
      onClose={closeDialog}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullScreen={isMobile}
    >
      {isMobile && (
        <MobileHeader>
          <h4>Roman Zhuravlov</h4>
          <CloseButton onClick={closeDialog} />
        </MobileHeader>
      )}
      <Buttons>
        <MennuButton href="/about" title="Про меня">
          <FiUser color="var(--color-blue-6)" />
        </MennuButton>
        <MennuButton href="/projects" title="Проекты">
          <FiFolder color="var(--color-accent-yellow)" />
        </MennuButton>
        <MennuButton href="/articles" title="Блог">
          <FiBook color="var(--color-accent-green)" />
        </MennuButton>
        <MennuButton href="/podcasts" title="Подкасты">
          <FiMic color="var(--color-text-main)" />
        </MennuButton>
        <MennuButton href="https://github.com/snelsi" title="GitHub" prefetch={false}>
          <FiGithub color="var(--color-text-main)" />
        </MennuButton>
        <MennuButton href="/contacts" title="Контакты">
          <FiPhone color="var(--color-blue-6)" />
        </MennuButton>

        <MennuButton href="/support" title="Поддержать">
          <FiHeart color="var(--color-accent-red)" />
        </MennuButton>
      </Buttons>
      <ThemeSwitcher />
    </Modal>
  );
};

const MobileHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5em;
  padding-left: 0.25em;
  border-bottom: 1px solid var(--color-borderline);
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 4px;

  margin: 4px 0;
  max-width: 360px;
`;
