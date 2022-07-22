import React from 'react';

import sections from '../../consts/sections';

import { Container } from './Contact.styles';

const Contact: React.FC = () => {
  return <Container id={sections.contact.key}>Contato</Container>;
};

export default Contact;
