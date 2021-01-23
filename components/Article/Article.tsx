import styled from "styled-components";

export const Article = styled.article`
  vertical-align: baseline;
  font-weight: 400;
  font-variation-settings: "wght" 400;
  font-size: 19px;
  line-height: 30px;

  & * {
    font-family: Inter, var(--sans-family);
    line-height: inherit;
  }
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    font-family: "Montserrat", var(--sans-family);
  }

  & > *,
  & .article-body > * {
    display: block;
  }

  & .article-header {
    margin-bottom: min(8vw, 80px);
  }

  & h1 {
    font-size: 48px;
    line-height: 54px;
    margin-bottom: 40px;
    letter-spacing: -0.2px;
  }
  & h2 {
    font-size: 25px;
    line-height: 30px;
    margin: 60px 0 24px;
  }
  & h3 {
    font-size: 48px;
    line-height: 54px;
    margin-bottom: 40px;
    letter-spacing: -0.2px;
  }

  & p {
    margin-bottom: 24px;
    letter-spacing: -0.003em;
    hyphens: auto;
    word-break: break-word;
    & a {
      color: inherit;
      text-decoration: underline;
      text-decoration-color: var(--color-blue-400);
    }
  }

  & ol,
  & ul {
    list-style-position: outside;
    margin-top: 24px;
    margin-bottom: 24px;
    letter-spacing: -0.003em;
    list-style-image: none;
    padding: 0;
    word-break: break-word;

    & li {
      max-width: 600px;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      margin-left: 1.5em;

      &::marker {
        margin-right: 1em;
      }
    }
  }

  & blockquote {
    margin-bottom: 40px;
    margin-top: 40px;
    font-size: 22px;
    line-height: 32px;

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
  & .article-body {
    color: var(--color-text-main);
    & > *:not([data-width]),
    & > *[data-width="normal"] {
      margin-left: auto;
      margin-right: auto;
      max-width: 680px;
      width: var(--page-width);
    }
    & > *[data-width="wide"] {
      margin-left: auto;
      margin-right: auto;
      max-width: 1120px;
      width: var(--page-width);
    }
    & > *[data-width="fullscreen"] {
      margin-left: 0;
      margin-right: 0;
      max-width: none;
      width: 100%;
    }

    & .image-container {
      margin-bottom: 24px;
    }
  }

  transition: opacity 1.5s ease-out;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  @media (max-width: 590px) {
    & h1 {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 24px;
    }

    font-size: 17px;
    line-height: 25px;

    & blockquote {
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 30px;
    }
  }
`;
