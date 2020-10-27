import * as React from "react";
import styled from "styled-components";

import { ButtonText, Card } from "components";

import { Tag, projects } from "components/projects";
import { useMediaQuery } from "@material-ui/core";

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e9;
  height: 80px;

  & > h3 {
    white-space: nowrap;
  }
  & > ul {
    align-items: center;
    display: flex;
  }
  & button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    font-variation-settings: "wght" 500;

    --base-color: var(--color-button-gray);
    --text-color: var(--color-text-main);

    @media (min-width: 801px) {
      &[data-selected="true"] {
        background-color: rgba(var(--base-color), 0.2);
      }

      &:not(:last-child) {
        margin-right: 20px;
      }
    }

    @media (max-width: 800px) {
      &:not([data-selected="true"]) {
        display: none;
      }
    }
  }
`;

const Grid = styled.ul`
  display: grid;

  margin: 48px auto;
  gap: 48px;
  overflow: hidden;

  @media screen and (min-width: 940px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  & > li {
    overflow: hidden;
  }
`;

interface CatalogProps {}

export const CardsCatalog: React.FC<CatalogProps> = () => {
  const [mode, setMode] = React.useState<Tag>(undefined);
  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <div data-fix-width>
      <Header>
        <h3 className="montserrat">My Projects</h3>
        <ul>
          <li>
            <ButtonText
              onClick={() => setMode(isMobile ? "Project" : undefined)}
              data-selected={mode === undefined}
            >
              <span>All {projects.length}</span>
            </ButtonText>
          </li>
          <li>
            <ButtonText
              onClick={() => setMode(isMobile ? "Game" : "Project")}
              data-selected={mode === "Project"}
            >
              <span>
                Projects {projects.filter((project) => project.tags.includes("Project")).length}
              </span>
            </ButtonText>
          </li>
          <li>
            <ButtonText
              onClick={() => setMode(isMobile ? "Fun" : "Game")}
              data-selected={mode === "Game"}
            >
              <span>
                Games {projects.filter((project) => project.tags.includes("Game")).length}
              </span>
            </ButtonText>
          </li>
          <li>
            <ButtonText
              onClick={() => setMode(isMobile ? undefined : "Fun")}
              data-selected={mode === "Fun"}
            >
              <span>Fun {projects.filter((project) => project.tags.includes("Fun")).length}</span>
            </ButtonText>
          </li>
        </ul>
      </Header>
      <Grid>
        {projects.map((project) => (
          <li key={project.title}>
            <Card {...project} disabled={mode && !project.tags.includes(mode)} />
          </li>
        ))}
      </Grid>
    </div>
  );
};
