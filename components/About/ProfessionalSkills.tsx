import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100% !important;

  & > .header {
    margin-bottom: 1em !important;

    & h3 {
      font-variation-settings: "wght" 640;
    }
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  font-size: 40px;
  height: 1.6em;

  outline: none;
  position: relative;
  transition: var(--transition-ease);
  white-space: nowrap;

  @media (max-width: 1020px) {
    font-size: 22px;
  }

  &::after {
    content: "";
    position: absolute;
    height: 4px;
    background-color: currentColor;
    bottom: 0;
    left: 0;
    right: 100%;
    transition: all 0.5s cubic-bezier(0.694, 0, 0.335, 1);
  }

  &:hover,
  &[data-selected="true"] {
    &::after {
      right: 0;
    }
  }
`;

interface SkillProps {
  onClick: () => void;
  isSelected: boolean;
}
const Skill: React.FC<SkillProps> = ({ onClick, isSelected = false, children }) => (
  <li>
    <Button
      onFocus={onClick}
      onMouseEnter={onClick}
      data-selected={isSelected}
      data-font-size="XL"
      data-font-weight="600"
    >
      {children}
    </Button>
  </li>
);

const Wrapper = styled.div`
  background-color: var(--color-gray-9);
  padding: 40px 0;
  & > div {
    display: grid;
    gap: 2em;
    margin: 0 auto;
    width: 95%;

    grid-template-columns: 1fr 1fr;
    grid-template-areas: "list image";

    color: white;
    position: relative;

    & > .list {
      grid-area: list;
      padding-left: 2.325vw;

      & h4 {
        margin-bottom: 1em;
        color: var(--color-gray-400);
      }
      & li {
        list-style: none;
      }
    }

    & > .images-wrapper {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      height: 100%;

      & > .images {
        background-color: var(--color-gray-8);
        height: 0;

        padding-top: 100%;
        width: 100%;
        display: grid;
        position: relative;
        grid-area: image;

        & img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;

          object-fit: cover;

          opacity: 0;
          transition: all 0.35s ease-out;

          height: 100%;
          width: 100%;

          &[data-selected="true"] {
            opacity: 1;
          }
        }
      }
    }

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      grid-template-areas:
        "image"
        "list";
    }
  }
`;

// Vector created by stories - www.freepik.com
// https://www.freepik.com/free-photos-vectors/idea

const skills = [
  { skill: "Web development", img: "images/about/Working.svg", alt: "Web development" },
  { skill: "UI/UX design", img: "images/about/Creativity.svg", alt: "Creativity" },
  { skill: "SEO Marketing", img: "images/about/SEO.svg", alt: "SEO" },
  { skill: "System Engineering", img: "images/about/System.svg", alt: "System Engineering" },
  { skill: "Database Engineering", img: "images/about/DB.svg", alt: "Database Engineering" },
  { skill: "Team managment", img: "images/about/Friendship.svg", alt: "Team managment" },
];
interface ProfessionalSkillsProps {}

export const ProfessionalSkills: React.FC<ProfessionalSkillsProps> = () => {
  const [state, setState] = React.useState(0);

  return (
    <Container className="block">
      <div className="header block" data-font-size="Large" data-font-weight="600">
        <div className="text-block">
          <h3 data-font-size="Large" className="montserrat">
            What can I do?
            <br />
            Well... A lot of things!
          </h3>
        </div>
      </div>

      <Wrapper>
        <div>
          <div className="list montserrat">
            <h4 data-font-size="L" data-font-weight="Light">
              My Professional skills
            </h4>
            <ul>
              {skills.map((skill, i) => (
                <Skill onClick={() => setState(i)} isSelected={state === i} key={skill.skill}>
                  {skill.skill}
                </Skill>
              ))}
            </ul>
          </div>

          <div className="images-wrapper">
            <div className="images">
              {skills.map((skill, i) => (
                <img
                  src={skill.img}
                  alt={skill.alt}
                  data-selected={state === i}
                  key={skill.skill}
                />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
