import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 30rem;
  height: 15rem;
  margin: 0 auto;
  transition: all 0.6s;
  overflow: hidden;

  &:hover {
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);

    .face.face1 {
      display: block;
    }
  }

  .face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .face.face1 {
    padding: 1.6rem;
    text-align: center;
    background-color: #FFF;
    color: var(--text-black);
    transition: all 0.6s;
    display: none;

    a {
      display: inline-block;
      padding: 0.4rem 0.8rem;
      margin-top: 0.8rem;
      text-decoration: none;
      color: var(--primary);
      border: 2px solid var(--primary);

      &:hover {
        color: #FFF;
        background-color: var(--primary);
      }
    }
  }

  .face.face2 {

    > img {
      margin: 0;
      padding: 0;
      width: 100%;
    }
  }

  &:hover .face.face2 {
    display: none;
  }
`;
