import React, { useState } from 'react';
import { Botao, Container } from './Navbar.styles';

const Narbar: React.FC = () => {
  const [ativo, setAtivo] = useState<boolean>(false);
  
  return <Container ativo={ativo}>
    <Botao onClick={() => setAtivo(!ativo)}>Clique aqui</Botao>
  </Container>;
}

export default Narbar;