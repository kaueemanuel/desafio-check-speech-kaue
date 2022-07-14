import React from "react";
import sections from "../../consts/sections";

import { Container, Content, Logo, LinksContent } from "./Navbar.styles";

const Narbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>CheckSpeech AI</Logo>
        <LinksContent>
          <ul>
            <li>
              <a href={`#${sections.header.key}`}>{sections.header.name}</a>
            </li>
            <li>
              <a href={`#${sections.solutions.key}`}>{sections.solutions.name}</a>
            </li>
            <li>
              <a href={`#${sections.customers.key}`}>{sections.customers.name}</a>
            </li>
            <li>
              <a href={`#${sections.prices.key}`}>{sections.prices.name}</a>
            </li>
            <li>
              <a href={`#${sections.contact.key}`}>{sections.contact.name}</a>
            </li>
          </ul>
        </LinksContent>
      </Content>
    </Container>
  );
};

export default Narbar;
