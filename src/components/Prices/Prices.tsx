import React from 'react';

import sections from '../../consts/sections';

import { Container } from './Prices.styles';
import PricesCard from './PricesCard/PricesCard/PricesCard';

const Prices: React.FC = () => {
  const plans = [
    {
      title: 'Beginner',
      annualPrice: 'R$ 29,00',
      monthlyPrice: 'R$ 29,00',
      description: [
        'Transcrição de Áudio Assíncrono - 120 minutos (R$0,20 / minuto excedente)',
        'Transcrição de Áudio em tempo real - 90 minutos (R$0,40 / minuto excedente)',
        'Identificação de Idiomas em áudios - 200 minutos (R$0,05 / minuto excedente)',
        'Análise de sentimento a partir do áudio (áudio pré-gravado) - 120 minutos (R$0,40 / minuto excedente)',
      ],
    },
  ];
  return (
    <Container id={sections.prices.key}>
      {plans.map((plan) => (
        <PricesCard
          key={plan.title}
          title={plan.title}
          annualPrice={plan.annualPrice}
          monthlyPrice={plan.monthlyPrice}
          description={plan.description}
        />
      ))}
    </Container>
  );
};

export default Prices;
