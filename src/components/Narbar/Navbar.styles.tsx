import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-background);
  z-index: 10000;
`;

export const Content = styled.div.attrs({ className: "containerWrapper" })`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
  flex-wrap: wrap;
`;

export const Logo = styled.div`
  font-size: 1.33rem;
  font-weight: bold;
`;

export const LinksContent = styled.div`
  font-size: 1.33rem;
  font-weight: bold;

  ul {
    display: flex;
    list-style-type: none;
    gap: 12px;
  }
  a {
    text-decoration: none;
    color: var(--color-primary);
  }
`;
