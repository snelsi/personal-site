import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Tag } from "components/Tag";

const PlateBase = withStyles({
  root: {
    "--text-color": "#fff",
    "--base-color": "69, 137, 255",

    width: 92,

    backgroundColor: "rgba(var(--base-color), 0.75)",

    "&:hover": {
      backgroundColor: "rgba(var(--base-color), 0.75)",
    },

    "&:focus": {
      backgroundColor: "rgba(var(--base-color), 0.75)",
    },

    "&:active": {
      backgroundColor: "rgba(var(--base-color), 0.75)",
    },

    '&[data-type="strong"]': {
      "--base-color": "66, 190, 101",
    },
    '&[data-type="medium"]': {
      "--base-color": "56, 175, 255",
    },
    '&[data-type="bad"]': {
      "--base-color": "249, 77, 86",
    },
  },
})(Tag);

interface PlateProps {
  value: "strong" | "medium" | "bad";
}

export const Plate: React.FC<PlateProps> = ({ value }) => {
  if (value === "strong") {
    return (
      <PlateBase data-type={value} tabIndex={-1}>
        Strong
      </PlateBase>
    );
  }
  if (value === "medium") {
    return (
      <PlateBase data-type={value} tabIndex={-1}>
        Medium
      </PlateBase>
    );
  }
  if (value === "bad") {
    return (
      <PlateBase data-type={value} tabIndex={-1}>
        Low
      </PlateBase>
    );
  }
  return (
    <PlateBase data-type={value} tabIndex={-1}>
      Low
    </PlateBase>
  );
};
