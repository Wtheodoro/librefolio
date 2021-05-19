import React from 'react';
import { Container } from './styles';

const TimeLineTitle: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="dot" />
      <h2>{children}</h2>
      <div className="vline" />
    </Container>
  )
}

export default TimeLineTitle;