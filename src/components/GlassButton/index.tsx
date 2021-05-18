import React from 'react';

import { Container } from './styles';

const GlassButton: React.FC = ({ children }) => {
  return (
    <Container>
      <a href="#">{children}</a>
    </Container>
  )
}

export default GlassButton;