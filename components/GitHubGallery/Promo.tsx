import * as React from "react";
import styled from "styled-components";

interface GitHubPropmoProps {}

export const GitHubPromo: React.FC<GitHubPropmoProps> = () => {
  return (
    <Block>
      <h5>Our Products</h5>
      <p>
        Open-source projects and some technologic experiments in Media, Social Networks, Education,
        Augmented Reality and Medicine
      </p>
    </Block>
  );
};

const Block = styled.div`
  text-align: center;
  margin: 80px 20px 40px;
  & h5 {
    font-weight: 400;
  }
  & p {
    margin: auto;
    margin-top: 12px;
    max-width: 400px;
  }
`;
