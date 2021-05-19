import React from 'react';

import { Container } from './styles';

const Divider: React.FC = () => {
  return (
    <Container>
      <div className="flat" />
      <div className="point" />
      <div className="point" />
      <div className="flat" />
    </Container>
  )
}

export default Divider;