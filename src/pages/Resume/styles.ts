import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  > h1 {
    margin: 1.5rem 0;
  }

  .timelines {
    display: flex;
  }

  @media(max-width:425px) {
    padding-bottom: 4rem;
    .timelines {
      flex-direction: column;
    }
  }
`;