import * as React from "react";
import styled from "styled-components";

function getMonday(d: Date) {
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return new Date(d);
}

interface IWeek {
  label: string;
  status: "gone" | "current" | "future";
}
interface WeeksProps {
  birthday: Date;
  date: Date;
}

export const Weeks: React.FC<WeeksProps> = ({ birthday, date }) => {
  const firstWeek = getMonday(birthday);
  const currentWeek = getMonday(date);

  const weeks = React.useMemo(() => {
    const weeks = new Array<IWeek>(4275);
    const shiftedWeek = new Date(firstWeek);

    let i = 0;
    while (shiftedWeek < currentWeek) {
      weeks[i] = {
        label: shiftedWeek.toLocaleString(),
        status: "gone",
      };
      shiftedWeek.setDate(shiftedWeek.getDate() + 7);
      i++;
    }
    weeks[i] = {
      label: shiftedWeek.toLocaleString(),
      status: "current",
    };
    i++;

    for (; i < 4275; i++) {
      shiftedWeek.setDate(shiftedWeek.getDate() + 7);
      weeks[i] = {
        label: shiftedWeek.toLocaleString(),
        status: "future",
      };
    }
    return weeks;
  }, [firstWeek, currentWeek]);

  return (
    <Container>
      <h4>Прожито недель</h4>
      <Grid>
        {weeks.map(({ label, status }) => (
          <Week key={label} title={label} data-status={status} />
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  max-width: 944px;
  & h4 {
    margin-bottom: 1em;
  }
`;

const Grid = styled.div`
  --cell-size: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--cell-size));
  grid-gap: 2px;

  & span:nth-last-child(9) {
    opacity: 0.7;
  }
  & span:nth-last-child(8) {
    opacity: 0.6;
  }
  & span:nth-last-child(7) {
    opacity: 0.5;
  }
  & span:nth-last-child(6) {
    opacity: 0.4;
  }
  & span:nth-last-child(5) {
    opacity: 0.3;
  }
  & span:nth-last-child(4) {
    opacity: 0.2;
  }
  & span:nth-last-child(3) {
    opacity: 0.1;
  }
  & span:nth-last-child(2) {
    opacity: 0.05;
  }
  & span:nth-last-child(1) {
    opacity: 0.02;
  }
`;

const Week = styled.span`
  background-color: var(--color-gray-1);
  border-radius: 3px;
  border: 1px solid var(--color-gray-7);
  cursor: pointer;
  width: var(--cell-size);
  height: var(--cell-size);
  transition: var(--transition-ease);

  &[data-status="gone"] {
    background-color: var(--color-gray-5);
  }
  &[data-status="current"] {
    background-color: var(--color-red-5);
  }

  &:hover {
    transform: scale(1.1);
  }
`;
