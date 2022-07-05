import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #9b9bdb;
  z-index: 10000;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div.attrs({ className: "containerWrapper" })`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid green;
`;
