import styled from "styled-components";

interface ContainerProps {
  ativo?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.ativo ? 'red' : 'blue'};
`

export const Botao = styled.button`
 
`