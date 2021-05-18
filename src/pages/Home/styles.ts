import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  background-color: #BEE4F9;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.main`
  width: 30rem;
  
  > h1 {
    margin: 2rem 0;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--text-black);
  }

  button + button {
    margin-left: 1rem;
  }
`

export const Media = styled.div`
  > img {
    height: 70vh;
  }
`
