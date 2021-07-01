import styled from 'styled-components';

export const Container = styled.div`
  .top {
    display: flex;
    justify-content: space-between;

    div + div {
      margin-left: 1.5rem;

      @media(max-width:425px) {
        margin-left: 0;
      }
    }
  }

  button {
    margin-top: 2rem;
  }

  @media(max-width:425px) {
    .top {
      flex-direction: column;
    }

    div + div {
      margin-left: 0;
    }
  }
`;
