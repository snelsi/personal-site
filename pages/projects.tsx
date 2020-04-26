import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import { PageFooter, PageHeader, SiteHeader } from "components";
import {
  CanvasHexagons,
  Timestamp,
  Hangman,
  GameOfLife,
  PersonalSite,
  CocomoCalculator,
} from "components/Projects";

const Projects: NextPage = () => (
  <>
    <Head>
      <title>Projects</title>
    </Head>
    <SiteHeader />

    <main>
      <PageHeader data-fix-width>
        <h2>Мои проекты</h2>
        <p>
          Да! Я тоже в шоке от их количества и крутости.{" "}
          <span role="img" aria-label="cool emoji">
            😎
          </span>
        </p>
      </PageHeader>
      <Grid data-fix-width>
        <PersonalSite />
        <Timestamp />
        <Hangman />
        <GameOfLife />
        <CanvasHexagons />
        <CocomoCalculator />
      </Grid>
    </main>
    <PageFooter />
  </>
);

const Grid = styled.div`
  display: grid;
  gap: 1em;
`;
export default Projects;
