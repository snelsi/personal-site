import * as React from "react";
import styled from "styled-components";

import { ImageLightbox } from "components/ImageLightbox";

const Container = styled.div`
  & button.lightboxImageButton {
    height: 160px;
    width: 160px;

    border-radius: 50%;
  }
  &[data-size="big"] {
    & button.lightboxImageButton {
      height: 250px;
      width: 250px;
    }
  }
`;

interface AvatarProps {
  "data-size"?: "normall" | "big";
}

export const Avatar: React.FC<AvatarProps> = (props) => (
  <Container {...props}>
    <ImageLightbox src="my_photo.jpg" alt="Me" />
  </Container>
);
