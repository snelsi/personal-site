import * as React from "react";
import styled from "styled-components";

interface StandProps {
  image: string;
  href: string;
  title: string;
  description: string;
}

export const Stand: React.FC<StandProps> = ({ image, href, title, description }) => (
  <Container>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={image} alt="Stand preview" />
    </a>
    <header>{title}</header>
    <p className="subheadline">{description}</p>
  </Container>
);

const Container = styled.div`
  & img {
    background-color: #333;
    border-radius: 12px;
    object-fit: cover;
    height: 200px;
    width: 160px;
  }
  & header {
    margin-top: 10px;
    font-weight: 500;
    font-variation-settings: "wght" 500;
  }
  & p {
    color: #3c3c43;
    margin-top: 2px;

    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;

    overflow: hidden;
  }
`;
