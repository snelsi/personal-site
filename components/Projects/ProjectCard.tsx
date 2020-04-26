import * as React from "react";
import styled from "styled-components";

interface ProjectCardProps {
  img: string;
  title: string;
  slogan?: string;
  description: string;
  url: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  title,
  slogan,
  description,
  url,
}) => (
  <Container>
    <div className="main">
      <div>
        <h2>{title}</h2>

        {slogan && <h5>{slogan}</h5>}
        <p>{description}</p>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
    </div>
    <Image src={img} alt="Project preview" />
  </Container>
);

const Image = styled.img`
  border-radius: 0.5em;
  min-height: 280px;
  height: 100%;
  margin: auto;
  width: 100%;
  object-fit: cover;
  transition: var(--transition-ease);

  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.99);
  }
`;

const Container = styled.div`
  border: 1px solid var(--color-borderline);
  border-radius: 0.5rem;
  padding: 2em;
  position: relative;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25em;

  @media (min-width: 1200px) {
    min-height: 415px;
    padding: 2.5em 3.75em;
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }

  & > .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 450px;
    width: 100%;

    & h2 {
      margin-bottom: 1em;
      max-width: 360px;
    }

    & h5 {
      margin: 1em 0;
      font-weight: 300;
      font-variation-settings: "wght" 300;
    }

    & p {
      color: var(--color-text-secondary);
      font-size: 1.25em;
      margin: 1em 0;
      max-width: 420px;
      line-height: 1.5em;
    }

    & > a {
      color: var(--color-text-secondary);
      transition: var(--transition-ease);
      word-break: break-word;

      &:hover {
        color: var(--color-blue-5);
      }
      &:active {
        color: var(--color-blue-6);
      }
    }
  }
`;
