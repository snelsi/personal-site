import * as React from "react";
import styled from "styled-components";

import { ImageLightbox } from "components/ImageLightbox";

const Container = styled.div`
  & button.lightboxImageButton {
    height: 250px;
    width: 250px;

    margin: 1em auto;
    border-radius: 50%;
  }
`;

interface MyPhotoProps {}

export const MyPhoto: React.FC<MyPhotoProps> = () => (
  <Container>
    <ImageLightbox src="my_photo.jpg" alt="Me" />
  </Container>
);
