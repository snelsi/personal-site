import * as React from "react";
import styled from "styled-components";

interface MyPhotoProps {}

export const MyPhoto: React.FC<MyPhotoProps> = () => <Img src="my_photo.jpg" alt="Me" />;

const Img = styled.img`
  border-radius: 50%;
  display: block;
  height: 250px;
  width: 250px;
  margin: 1em auto;
`;
