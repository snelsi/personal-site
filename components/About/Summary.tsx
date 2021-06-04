import * as React from "react";
import styled from "@emotion/styled";
import { useInView } from "scripts";

const Container = styled.div`
  max-width: 520px;
  margin: auto;

  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }
`;

interface SummaryProps {}

export const Summary: React.FC<SummaryProps> = () => {
  const { visible, ref } = useInView();

  return (
    <Container className="block" ref={ref} data-visible={visible}>
      <div className="text-block">
        <h3>In Summary</h3>
        <p>
          I&apos;m a very pedantic person. And always put a soul in things I do. I&apos;m trying to
          regularly learn new stuff and have relevant knowledge in my specialty. Trust me, code
          without crutches is worth the time spent on it! I will be glad to become part of a
          friendly team and join the work on an interesting project.
        </p>
      </div>
    </Container>
  );
};
