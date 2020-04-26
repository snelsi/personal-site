import styled from "styled-components";

export const Tumbler = styled.input.attrs(({ type = "checkbox" }) => ({
  type: type
}))`
  -webkit-appearance: none;
  -moz-appearance: none;

  background-color: #fff;
  border: 1px solid #bbc1e1;

  cursor: pointer;
  display: inline-block;

  height: 21px;
  width: 21px;
  margin: 0;

  outline: none;
  position: relative;
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.2s,
    transform 0.6s cubic-bezier(0.2, 0.85, 0.32, 1.2) 0.3s;

  vertical-align: top;

  &:checked {
    background-color: #275efe;
    border-color: #275efe;
  }

  &:disabled {
    background-color: #f6f8ff;
    cursor: not-allowed;
    opacity: 0.9;
    &:checked {
      background-color: #e1e6f9;
      border-color: #bbc1e1;
    }
  }

  &:hover {
    &:not(:checked) {
      &:not(:disabled) {
        border-color: #275efe;
      }
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(39, 94, 254, 0.3);
  }

  &::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
