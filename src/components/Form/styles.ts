import styled from 'styled-components';

export const Container = styled.div`
  .top {
    display: flex;
    justify-content: space-between;

    div + div {
      margin-left: 1.5rem;
    }
  }

  button {
    margin-top: 2rem;
  }
`;
