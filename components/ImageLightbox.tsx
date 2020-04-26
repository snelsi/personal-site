import * as React from "react";
import styled from "styled-components";
import FsLightbox from "fslightbox-react";

interface ImageLightboxProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ src, ...props }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Button className="lightboxImageButton" type="button" onClick={() => setOpen(!open)}>
      <img alt="No description" {...props} src={src} />
      <FsLightbox key={src} toggler={open} sources={[src]} />
    </Button>
  );
};

const Button = styled.button`
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0;
  cursor: pointer;

  display: block;
  margin: auto;

  transition: var(--transition-ease);
  outline: none;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 1px 2px var(--color-blue-4);
  }
  &:focus {
    box-shadow: 0 0 2px 2px var(--color-blue-6);
  }

  & > img {
    display: block;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  & .fslightbox-toolbar-button:nth-child(1) {
    display: none;
  }
`;
