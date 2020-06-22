import * as React from "react";

import { Button } from "components/Buttons";
import { withStyles } from "@material-ui/core";

const HireButton = withStyles({
  root: {
    backgroundColor: "var(--color-magenta-500)",
    color: "white",
    fontSize: "1em",
    paddingRight: "2.5em",

    "& > svg": {
      marginRight: "8px",
    },
  },
})(Button);

interface HireMeButtonProps {}

export const HireMeButton: React.FC<HireMeButtonProps> = () => (
  <HireButton>
    <MailIcon />
    Hire me
  </HireButton>
);

const MailIcon = () => (
  <svg fill="none" viewBox="0 0 16 16" height="16" width="16">
    <path
      fill="#fff"
      d="M12.9 3H3.1c-.56 0-1.1.24-1.48.66-.4.42-.62 1-.62 1.59v7.5c0 .6.22 1.17.62 1.6.39.41.92.65 1.48.65h9.8c.56 0 1.1-.24 1.48-.66.4-.42.62-1 .62-1.59v-7.5c0-.6-.22-1.17-.62-1.6C14 3.25 13.46 3 12.9 3zm-.47 1.5L8 8.06 3.57 4.5h8.86zm.47 9H3.1a.68.68 0 01-.5-.22.78.78 0 01-.2-.53V5.44L7.58 9.6a.67.67 0 00.84 0l5.18-4.16v7.31c0 .2-.07.39-.2.53a.68.68 0 01-.5.22z"
    />
  </svg>
);
