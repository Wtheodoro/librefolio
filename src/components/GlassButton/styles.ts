import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 10rem;
  height: 4rem;
  margin: 1.2rem;

  > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    color: #FFF;
    z-index: 1;
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(15px);

    &:hover {
      letter-spacing: 3px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
      transform: skewX(45deg) translateX(0);
      transition: 0.5s;
    }
  }

  &:hover a::before {
    transform: skewX(45deg) translateX(200%);
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    width: 30px;
    height: 10px;
    background: #f00;
    border-radius: 10px;
    transition: all 0.5s;
    transition-delay: 0s;

  }

  &:hover::before {
    bottom: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -5px;
    width: 30px;
    height: 10px;
    background: #f00;
    border-radius: 10px;
    transition: all 0.5s;
    transition-delay: 0s;
  }

  &:hover::after {
    top: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
  }

  &::before,
  &::after {
    background: red;
    box-shadow:
      0 0 5px red,
      0 0 15px red,
      0 0 30px red,
      0 0 60px red,
  }
`;
