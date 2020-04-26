import * as React from "react";
import styled from "styled-components";

import { Avatar } from "components";

const Container = styled.div`
  & button.lightboxImageButton {
    margin: 1em auto;
  }
`;

interface MyPhotoProps {}

export const MyPhoto: React.FC<MyPhotoProps> = () => (
  <Container>
    <Avatar data-size="big" />
  </Container>
);
