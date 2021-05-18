import React from 'react';
import Button from '../../components/Button';
import RotatingText from '../../components/RotatingText';
import Title from '../../components/Title';

import { Container, Content, Media } from './styles';

const Home: React.FC = () => {
  const rotatingTextItems = ['Web developer', 'React developer', 'Typescript developer']
  return (
    <Container>
      <Content>
        <Title>I'm Walison Teodoro</Title>
        <h1>
          I'm a <RotatingText items={rotatingTextItems}/><br/>
          Based in Campinas-SP
        </h1>
        <Button>My Portifolio</Button>
        <Button tranparency={true}>Read More</Button>
      </Content>

      <Media>

      </Media>
    </Container>
  )
}

export default Home;