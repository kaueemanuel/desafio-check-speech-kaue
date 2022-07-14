import React from "react";

import sections from "../../consts/sections";

import { Container } from "./Prices.styles";

const Prices: React.FC = () => {
  return <Container id={sections.prices.key}>Preços</Container>;
};

export default Prices;
