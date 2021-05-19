import React from 'react';
import { Container } from './styles';

interface ButtonProps {
  children: any
  tranparency?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, tranparency = false }) => {
  return (
    <Container tranparency={tranparency}>
      {children}
    </Container>
  )
}

export default Button;