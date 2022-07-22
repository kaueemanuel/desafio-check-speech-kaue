import React from 'react';

import sections from '../../consts/sections';

import { Container, Img } from './Customers.styles';

import customer1 from '../../assets/imgs/customers/1.svg';
import customer2 from '../../assets/imgs/customers/2.svg';
import customer3 from '../../assets/imgs/customers/3.svg';
import customer4 from '../../assets/imgs/customers/4.svg';
import customer5 from '../../assets/imgs/customers/5.svg';
import customer6 from '../../assets/imgs/customers/6.svg';

const Customers: React.FC = () => {
  return (
    <Container id={sections.customers.key}>
      <Img src={customer1} />
      <Img src={customer2} />
      <Img src={customer3} />
      <Img src={customer4} />
      <Img src={customer5} />
      <Img src={customer6} />
    </Container>
  );
};

export default Customers;
