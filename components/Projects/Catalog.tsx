import * as React from "react";
import styled from "styled-components";

import { projects, ProjectCard } from "components/Projects";
import { Header } from "components/Header";

interface CatalogProps {}

export const Catalog: React.FC<CatalogProps> = () => (
  <>
    <Header>
      <h4>Больше всякого</h4>
    </Header>
    <Grid>
      {projects.map(project => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </Grid>
  </>
);

const Grid = styled.div`
  display: grid;
  grid-gap: 1.25em;
  padding: 1.25em 0;
  width: 100%;
`;
