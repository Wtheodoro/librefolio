import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
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

export const Segment = styled.div`
  width: 5rem;
  height: 5px;
  background-color: var(--primary);
  margin: 1.2rem 0 1rem .7rem;
`
