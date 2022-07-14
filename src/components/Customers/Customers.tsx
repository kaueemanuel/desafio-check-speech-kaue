import React from "react";

import sections from "../../consts/sections";

import { Container } from "./Customers.styles";

const Customers: React.FC = () => {
  return <Container id={sections.customers.key}>Clientes</Container>;
};

export default Customers;
