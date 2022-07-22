import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-background-secondary);
  z-index: 10000;
  box-shadow: var(--box-shadow-default);
`;

export const Content = styled.div.attrs({ className: 'containerWrapper' })`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
  flex-wrap: wrap;
`;

export const Logo = styled.a`
  font-family: Oswald, sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-primary);
`;

export const LinksContent = styled.div`
  font-size: 1.33rem;
  font-weight: 500;

  ul {
    display: flex;
    list-style-type: none;
    gap: 12px;
  }
`;

interface LinkProps {
  active?: boolean;
}

export const Link = styled.a<LinkProps>`
  text-decoration: none;
  color: var(--color-primary);
  font-weight: ${(props) => (props.active ? '600' : 'normal')};
`;
