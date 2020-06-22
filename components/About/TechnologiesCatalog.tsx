import * as React from "react";
import styled from "styled-components";

import { Technologie } from "./Technologie";

const technologies = [
  "JS",
  "HTML",
  "CSS",
  "Git",
  "React",
  "Typescript",
  "Next",
  "Webpack",
  "Postgresql",
  "MySql",
  "NodeJS",
  "Apollo",
  "CSharp",
  "GraphQL",
  "Express",
  "Redux",
  "Gatsby",
  "PWA",
  "Svelte",
  "MaterialUI",
  "Mobx",
  "C++",
  "Vue",
  "Angular",
  "Electron",
  "Bootstrap",
  "JQuery",
  "C",
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
        // Ref.current.scrollTo({ left: 0 });
      }
      // Othervise scroll left 1 pixel
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
        {technologies.map((technologie) => (
          <Technologie src={technologie} key={technologie} />
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
