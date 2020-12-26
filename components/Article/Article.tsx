import styled from "styled-components";

export const Article = styled.article`
  vertical-align: baseline;

  & * {
    font-family: Inter, var(--sans-family);
  }
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    font-family: "Montserrat", var(--sans-family);
  }

  & > * {
    display: block;
  }
  & > *:not([data-full-width]) {
    color: #292926;
    margin-left: auto;
    margin-right: auto;
    max-width: 680px;
    width: 88%;
  }

  & h1 {
    font-size: 48px;
    line-height: 54px;
    margin-bottom: 40px;
    letter-spacing: -0.2px;
    max-width: 720px;
  }
  & h2 {
    font-size: 25px;
    line-height: 30px;
    margin: 60px 0 20px;
    max-width: 720px;
  }
  & h3 {
    font-size: 48px;
    line-height: 54px;
    margin-bottom: 40px;
    letter-spacing: -0.2px;
    max-width: 720px;
  }

  & p {
    font-weight: 400;
    font-variation-settings: "wght" 400;
    font-size: 19px;
    line-height: 30px;
    margin-bottom: 24px;
    max-width: 680px;
    letter-spacing: -0.003em;
    word-break: break-word;
  }

  & blockquote {
    margin-bottom: 40px;
    margin-top: 40px;
    font-size: 22px;
    line-height: 32px;
    max-width: 920px;

    background: #f8f8f8;
    padding: 0.85em 1.5em;
    border-radius: 5px;
    margin-left: -0.75em;
    margin-right: -0.75em;
  }

  & mark {
    background-color: #ffffa1;
    box-shadow: 0 5px 0 #ffffa1, 0 -1px 0 #ffffa1;
  }
  @media (max-width: 590px) {
    & h1 {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 24px;
    }

    & p {
      font-size: 17px;
      line-height: 25px;
    }

    & blockquote {
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 30px;
    }
  }
`;
