import * as React from "react";
import styled from "styled-components";

interface PodcastCardProps {}

export const PodcastCard: React.FC<PodcastCardProps> = () => {
  return (
    <Card>
      <h6>Подскат</h6>
      <p>Какую музыку слушают разработчики во время работы?</p>
    </Card>
  );
};

const Card = styled.div`
  background-color: var(--color-purple-5);
  border-radius: 0.5rem;
  padding: 1em;
`;
