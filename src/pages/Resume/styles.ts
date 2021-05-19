import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    margin: 1.5rem 0;
  }

  .timelines {
    display: flex;
  }
`;