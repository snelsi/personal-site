import * as React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "@material-ui/core";
import { FiBook, FiGithub, FiHome, FiLinkedin, FiUser, FiMail } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa";

import { MenuButton, MenuHeader, Modal, SurpriseMenuButton } from "components/SiteHeader/Menu";

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
      className="montserrat"
    >
      {isMobile && <MenuHeader closeDialog={closeDialog} />}
      <Grid>
        <Buttons>
          <MenuButton href="/" title="Home">
            <FiHome color="var(--color-grey-10)" />
          </MenuButton>
          <MenuButton href="/contact" title="Contact">
            <FiMail color="var(--color-magenta-500)" />
          </MenuButton>
          <MenuButton href="/about" title="About me">
            <FiUser color="var(--color-blue-500)" />
          </MenuButton>

          <MenuButton href="/blog" title="Blog">
            <FiBook color="var(--color-green-500)" />
          </MenuButton>
          <SurpriseMenuButton />
        </Buttons>

        <hr />

        <Buttons>
          <MenuButton href="https://github.com/snelsi" title="GitHub" outside>
            <FiGithub color="var(--color-text-main)" />
          </MenuButton>
          <MenuButton href="https://dribbble.com/snelsi" title="Dribbble" outside>
            <FaDribbble color="#EA4C89" />
          </MenuButton>
          <MenuButton href="https://www.linkedin.com/in/snelsi/" title="LinkedIn" outside>
            <FiLinkedin color="#2176A6" />
          </MenuButton>
        </Buttons>
      </Grid>
    </Modal>
  );
};

const Grid = styled.div`
  display: grid;
  grid-gap: 4px;

  margin: 4px 0;
`;
const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 4px;

  @media (min-width: 721px) {
    max-width: 360px;
  }
`;
