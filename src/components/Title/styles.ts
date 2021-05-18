import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  > div {
    background-color: var(--primary);
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    position: absolute;
  }

  > span {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-black);
    margin-left: 1.2rem;
    z-index: 1;
  }
`;
