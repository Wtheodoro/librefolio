import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Media = styled.div`
  margin-right: 2%;

  > img {
    height: 40rem;
  } 
`

export const Content = styled.div`
  width: 40%;
  margin-left: 2%;

  > h1 {
    margin: 1rem 0 2rem 0;
  }

  > p {
    margin-bottom: 2rem;
  }

  .all-skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    > div {
      margin: 0.5rem;
    }
  }
`
