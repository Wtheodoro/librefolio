import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  background-color: #BEE4F9;
  height: 100vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.main`  
  > h1 {
    margin: 2rem 0;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--text-black);
  }

  button + button {
    margin-left: 1rem;
  }

  @media(max-width: 768px) {
    width: 25rem;
  }
`

export const Media = styled.div`
  img {
    height: 70vh;
  }
  
  @media(max-width: 1080px) {
    img {
        height: 60vh;
    }
  }

  @media(max-width: 768px) {
    img {
        height: 50vh;
    }
  }
`
