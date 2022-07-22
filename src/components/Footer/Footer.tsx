import React from 'react';

import sections from '../../consts/sections';

import { Container } from './Footer.styles';

const Footer: React.FC = () => {
  return <Container id={sections.footer.key}>Rodapé</Container>;
};

export default Footer;
