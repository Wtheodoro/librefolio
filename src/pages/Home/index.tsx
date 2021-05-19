import React from 'react';
import Button from '../../components/Button';
import RotatingText from '../../components/RotatingText';
import Title from '../../components/Title';
import { pageVariants, pageTransition } from '../../assets/framerMotion'
import { Container, Content, Media } from './styles';
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const rotatingTextItems = ['Web developer', 'React developer', 'Typescript developer', 'UI Designer']

  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Content>
        <Title>I'm Walison Teodoro</Title>
        <h1>
          I'm a <RotatingText items={rotatingTextItems}/><br/>
          Based in Campinas-SP
        </h1>

        <Button>
          <Link to="/portifolio">My Portifolio</Link>
        </Button>


        <Button tranparency>
          <a href="https://github.com/Wtheodoro" 
            target="_blank"
            rel="noreferrer"
          ><FaGithub/> Github</a>
        </Button>

      </Content>

      <Media>
        <img src="./images/Obama.png" alt="" />
      </Media>
    </Container>
  )
}

export default Home;