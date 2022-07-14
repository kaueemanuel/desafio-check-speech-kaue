import React from "react";

import sections from "../../consts/sections";

import { Container } from "./Header.styles";

const Header: React.FC = () => {
  return <Container id={sections.header.key}>Header</Container>;
};

export default Header;
