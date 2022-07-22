import styled from 'styled-components';

export const Container = styled.section`
  background: var(--color-background);
  max-width: 250px;
  padding: 1em;
  box-shadow: var(--box-shadow-default);
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.1em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.4em;
`;

export const Prices = styled.div`
  font-size: 1.1em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.4em;
`;

export const Ul = styled.ul`
  list-style: inside;
`;
