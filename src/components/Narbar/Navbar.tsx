import React from "react";

import { Container, Content, Logo, LinksContent } from "./Navbar.styles";

const Narbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>CheckSpeech AI</Logo>
        <LinksContent>
          <ul>
            <li>
              <a href="#header">início</a>
            </li>
            <li>
              <a href="#solutions">soluções</a>
            </li>
            <li>
              <a href="#customers">clientes</a>
            </li>
            <li>
              <a href="#prices">preços</a>
            </li>
            <li>
              <a href="#contact">contato</a>
            </li>
          </ul>
        </LinksContent>
      </Content>
    </Container>
  );
};

export default Narbar;
