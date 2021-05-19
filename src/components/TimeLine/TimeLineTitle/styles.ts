import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 7rem;

  .dot {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: var(--primary);
  }

  > h2 {
    margin-left: 2rem;
  }

  .vline {
    height: 4rem;
    width: 1px;
    background-color: var(--text-black);
    position: absolute;
    top: calc(50% + 0.75rem);
    left: 0.75rem;
  }
`;
