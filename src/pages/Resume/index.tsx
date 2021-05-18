import React from 'react';
import { pageVariants, pageTransition } from '../../assets/framerMotion'
import { Container } from './styles';

const Resume: React.FC = () => {
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      Resume
    </Container>
  )
}

export default Resume;