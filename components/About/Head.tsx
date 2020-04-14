import * as React from "react";
import styled from "styled-components";

function calculate_age(birthday: Date) {
  const diff_ms = Date.now() - birthday.getTime();
  const age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

interface HeadProps {}

export const Head: React.FC<HeadProps> = () => (
  <div className="block">
    <Title>
      Привет!{" "}
      <span role="img" aria-label="happy little kitten">
        🐱
      </span>{" "}
      Меня зовут Роман Журавлёв <span className="no-wrap">и я — веб-разработчик.</span>
    </Title>
    <p>
      Мне {calculate_age(new Date("April 22 2000"))} лет, я студент 3 курса Киевского
      Политехнического Университета. Сейчас я проживаю в Киеве,{" "}
      <span className="no-wrap">
        Украина.
        <Flag src="static/UkrainFlag.svg" alt="Ukrain flag" />
      </span>
    </p>
  </div>
);

const Title = styled.h5`
  @media (max-width: 640px) {
    text-align: left;
  }
`;
const Flag = styled.img`
  display: inline-block;
  margin: 0 8px;
  height: 1.5em;
  width: 20px;

  vertical-align: bottom;
`;
