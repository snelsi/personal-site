import styled from "styled-components";

const Banner = styled.div`
  align-items: center;
  background-color: var(--cool-gray-9, #21272a);
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: flex;
  height: 30vw;
  max-height: 340px;
  text-decoration: none;
  overflow: hidden;
  padding: 12px 24px;
  position: relative;

  max-width: 1200px;
  margin: auto;

  & .main {
    align-items: center;
    display: grid;
    grid-gap: 8px;
    white-space: nowrap;
    z-index: 1;
  }

  & svg,
  & img {
    position: absolute;
    top: 12px;
    right: 24px;
    z-index: 0;
  }
`;

interface BunnerBaseProps {
  title: string;
  label?: string;
}
export const BannerBase: React.FC<BunnerBaseProps> = ({ children, title, label }) => (
  <Banner className="banner">
    <div className="main">
      <h5>{title}</h5>
      {label && <p className="text-secondary">{label}</p>}
    </div>
    {children}
  </Banner>
);
