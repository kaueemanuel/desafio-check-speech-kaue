import React from 'react';
import { Container, Title, Ul } from './PricesCard.styles';

interface PricesCardProps {
  title: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string[];
}

const PricesCard: React.FC<PricesCardProps> = ({
  annualPrice,
  description,
  monthlyPrice,
  title,
}) => {
  return (
    <Container>
      <Title>{title}</Title>

      {description.map((desc) => (
        <Ul key={desc}>
          <li>{desc}</li>
        </Ul>
      ))}
    </Container>
  );
};

export default PricesCard;
