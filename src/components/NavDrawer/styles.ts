import styled from 'styled-components';

interface ListProps {
  menuActive: boolean
}

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: calc(50% - 11rem);
  /* this zindex is for framer motion */
  z-index: 10;

  @media(max-width: 425px) {
    left: 50%;
    transform: translateX(-50%);
    top: auto;
    bottom: 0;
  }

  .navigation {
    position: relative;
  }

  .toggle {
    position: absolute;
    top: calc(50% - 1.25rem);
    right: -20px;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #080808;
    cursor: pointer;
    border: 5px solid #FFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
     font-size: 1rem;
     color: var(--primary); 
    }
  }
`;

export const List = styled.div<ListProps>`
  position: relative;
  width: ${props => props.menuActive === true ? '13rem' : '4rem'};
  min-height: 22rem;
  background-color: #111111;
  border-radius: 0 10px 10px 0;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;

  ul li {
    text-indent: 0;
    list-style: none;
  }

  > ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 0;
  }

  > ul li {
    position: relative;
    width: 100%;

    &:hover {
      background-color: #080808;
    }
  }

  > ul li a {
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: var(--primary);
    font-weight: 500;
  }

  > ul li a .icon {
    position: relative;
    display: block;
    min-width: 50px;
    height: 3.8rem;
    line-height: 3.8rem;
    text-align: center;

    & svg {
      font-size: 1.5rem;
    }
  }

  > ul li a .title {
    position: relative;
    display: block;
    height: 3.8rem;
    line-height: 3.8rem;
    white-space: nowrap;
    margin-left: 1rem;
  }

  @media(max-width: 425px) {
    height: 3rem;
    min-height: 0;
    width: 22rem;
    border-radius: 10px 10px 0 0;

    ul {
      display: flex;
      padding: 0;
    }
  }
`
