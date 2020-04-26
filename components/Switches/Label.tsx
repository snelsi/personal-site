import React from "react";
import styled from "styled-components";

const LabelElement = styled.label`
  color: #8a91b4;
  cursor: pointer;
  font-size: 14px;
  line-height: 21px;
  vertical-align: top;
  & span {
    margin-left: 10px;
  }
  & input[disabled] + span {
    cursor: not-allowed;
  }
`;

interface LabelProps {
  title?: string;
}
export const Label: React.FC<LabelProps> = ({ title, children }) => (
  <LabelElement>
    {children}
    {title && <span>{title}</span>}
  </LabelElement>
);
