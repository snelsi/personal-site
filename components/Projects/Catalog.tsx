import * as React from "react";
import styled from "styled-components";

import Link from "next/link";
import { ButtonText, Header } from "components";
import { projects, ProjectCard } from "components/Projects";

interface CatalogProps {}

export const Catalog: React.FC<CatalogProps> = () => (
  <>
    <Header>
      <h4>Полистать Проекты</h4>
      <Link href="/projects">
        <ButtonText component="a" href="/projects">
          See All
        </ButtonText>
      </Link>
    </Header>
    <Grid>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </Grid>
  </>
);

const Grid = styled.div`
  display: grid;
  grid-gap: 1.25em;
  padding: 2em 0;
  width: 100%;
`;
