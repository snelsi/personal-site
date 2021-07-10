import * as React from "react";
import styled from "@emotion/styled";

import { Technology } from "./Technology";

import JS from "public/images/technologies/JS.svg";
import HTML from "public/images/technologies/HTML.svg";
import CSS from "public/images/technologies/CSS.svg";
import Git from "public/images/technologies/Git.svg";
import ReactLogo from "public/images/technologies/React.svg";
import Typescript from "public/images/technologies/Typescript.svg";
import Next from "public/images/technologies/Next.svg";
import Webpack from "public/images/technologies/Webpack.svg";
import Postgresql from "public/images/technologies/Postgresql.svg";
import MySql from "public/images/technologies/MySql.svg";
import NodeJS from "public/images/technologies/NodeJS.svg";
import Apollo from "public/images/technologies/Apollo.svg";
import CSharp from "public/images/technologies/CSharp.svg";
import GraphQL from "public/images/technologies/GraphQL.svg";
import Express from "public/images/technologies/Express.svg";
import Redux from "public/images/technologies/Redux.svg";
import Gatsby from "public/images/technologies/Gatsby.svg";
import PWA from "public/images/technologies/PWA.svg";
import Svelte from "public/images/technologies/Svelte.svg";
import MaterialUI from "public/images/technologies/MaterialUI.svg";
import Mobx from "public/images/technologies/Mobx.svg";
import CPlusPlus from "public/images/technologies/C++.svg";
import Vue from "public/images/technologies/Vue.svg";
import Angular from "public/images/technologies/Angular.svg";
import Electron from "public/images/technologies/Electron.svg";
import Bootstrap from "public/images/technologies/Bootstrap.svg";
import JQuery from "public/images/technologies/JQuery.svg";
import C from "public/images/technologies/C.svg";

const technologies = [
  { title: "JS", logo: JS },
  { title: "HTML", logo: HTML },
  { title: "CSS", logo: CSS },
  { title: "Git", logo: Git },
  { title: "React", logo: ReactLogo },
  { title: "Typescript", logo: Typescript },
  { title: "Next", logo: Next },
  { title: "Webpack", logo: Webpack },
  { title: "Postgresql", logo: Postgresql },
  { title: "MySql", logo: MySql },
  { title: "NodeJS", logo: NodeJS },
  { title: "Apollo", logo: Apollo },
  { title: "CSharp", logo: CSharp },
  { title: "GraphQL", logo: GraphQL },
  { title: "Express", logo: Express },
  { title: "Redux", logo: Redux },
  { title: "Gatsby", logo: Gatsby },
  { title: "PWA", logo: PWA },
  { title: "Svelte", logo: Svelte },
  { title: "MaterialUI", logo: MaterialUI },
  { title: "Mobx", logo: Mobx },
  { title: "C++", logo: CPlusPlus },
  { title: "Vue", logo: Vue },
  { title: "Angular", logo: Angular },
  { title: "Electron", logo: Electron },
  { title: "Bootstrap", logo: Bootstrap },
  { title: "JQuery", logo: JQuery },
  { title: "C", logo: C },
];

export const TechnologiesCatalog = () => {
  const [paused, setPaused] = React.useState(false);
  const [direction, setDirection] = React.useState<"right" | "left">("right");
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);

  const ListRef = React.useRef<HTMLDivElement>();
  const dirRef = React.useRef(direction);

  const moveListLeft = () => {
    if (!ListRef.current) return;
    const dir = dirRef.current;

    if (dir === "right") {
      // If scrolled to the end, scroll to start
      if (
        ListRef.current.scrollWidth - ListRef.current.scrollLeft ===
        ListRef.current.clientWidth
      ) {
        setDirection("left");
        dirRef.current = "left";
      }
      // Otherwise scroll left 1 pixel
      else ListRef.current.scrollLeft = ListRef.current.scrollLeft + 1;
    }
    // scroll left
    else {
      if (ListRef.current.scrollLeft <= 1) {
        setDirection("right");
        dirRef.current = "right";
      } else ListRef.current.scrollLeft = ListRef.current.scrollLeft - 1;
    }
  };

  // Scroll 1px in direction every 20ms
  React.useEffect(() => {
    if (!paused) {
      const num = setInterval(() => moveListLeft(), 20);
      return () => clearInterval(num);
    }
  }, [paused]);

  return (
    <List
      ref={ListRef}
      // Stop scroll on interaction
      onMouseDown={() => setPaused(true)}
      onTouchStart={() => setPaused(true)}
      // Continue scroll after interaction
      onMouseUp={() => setPaused(false)}
      onTouchEnd={() => setPaused(false)}
      onScroll={() => {
        const newCurrent = ListRef.current.scrollLeft;

        if (newCurrent < lastScrollPosition) {
          if (direction !== "left") {
            setDirection("left");
            dirRef.current = "left";
          }
        } else if (newCurrent > lastScrollPosition && direction !== "right") {
          setDirection("right");
          dirRef.current = "right";
        }

        setLastScrollPosition(newCurrent);
      }}
    >
      <ul id="technologies-catalog">
        {technologies.map(({ title, logo }) => (
          <Technology title={title} src={logo} key={title} />
        ))}
      </ul>
    </List>
  );
};

const List = styled.div`
  background-color: var(--color-gray-1);
  overflow-x: auto;
  overflow-y: hidden;
  transition: var(--transition-ease);

  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  &::-webkit-scrollbar-track {
    background: none;
    box-shadow: none;
    border: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-gray-2);
    border-radius: 20px;
    border: 6px solid var(--color-gray-1);
    transition: var(--transition-ease);

    &:hover {
      background-color: var(--color-gray-4);
      opacity: 1;

      border: 5px solid var(--color-gray-1);
    }

    &:active {
      background-color: var(--color-gray-5);
      opacity: 1;
    }
  }

  & > ul {
    display: flex;
    flex-wrap: none;
    width: fit-content;
    padding: 0 24px;
  }
`;
