import styled from 'styled-components';

export const Container = styled.div`
  width: 30rem;
  position: relative;
  padding: 1rem 2.5rem 2rem;

  .hline {
    width: 1.8rem;
    height: 1px;
    background-color: var(--text-black);
    position: absolute;
    top: 2.25rem;
    left: 0.75rem;
  }

  .vline {
    height: 100%;
    width: 1px;
    background-color: var(--text-black);
    position: absolute;
    top: 1.25rem;
    left: 0.75rem;
  }
`;

export const Header = styled.div`
  display: flex;

  .icon {

    .dot {
      width: 2.5rem;
      height: 2.5rem;
      background-color: var(--primary);
      border-radius: 50%;

      > svg {
        font-size: 2.5rem;
        margin: .7rem 0 0 .5rem;
      }
    }

    
  }

  .title {
    margin: 0 0 1.5rem 1.5rem;

    > h3 {
      margin-bottom: .3rem;
    }
  }

`

export const Content = styled.p`
  margin-left: 1.25rem;
`