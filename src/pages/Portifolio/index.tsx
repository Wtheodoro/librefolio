import React from 'react';
import { pageVariants, pageTransition } from '../../assets/framerMotion'
import { Container } from './styles';

const Portifolio: React.FC = () => {
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      Portifolio
    </Container>
  )
}

export default Portifolio;