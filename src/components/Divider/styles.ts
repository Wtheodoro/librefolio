import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 13rem;

  .flat {
    width: 5rem;
    height: 5px;
    background-color: var(--primary);
    border-radius: 15px;
  }

  .point {
    width: 0.5rem;
    height: 5px;
    background-color: var(--primary);
    border-radius: 50%;
  }
`;
