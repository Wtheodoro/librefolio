import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 20rem;

  .icon {
    position: relative;

    .circle {
      position: absolute;
      width: 2.5rem;
      height: 2.5rem;
      background-color: var(--primary);
      border-radius: 50%;
      z-index: -1;
    }

    > svg {
      margin: .9rem 0 0 .7rem;
      font-size: 40px;
    }
  }

.skill {
  margin-left: 1rem;
  >h2 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}
`;
