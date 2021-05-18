import React from 'react';
import { Container } from './styles';

const Title: React.FC = ({ children }) => {
  return (
    <Container>
      <span>{children}</span>
      <div/>
    </Container>
  )
}

export default Title;