import React from 'react';
import Button from '../../components/Button';
import NavDrawer from '../../components/NavDrawer';
import RotatingText from '../../components/RotatingText';
import Title from '../../components/Title';
import { Container, Content, Media } from './styles';
import { FaHome, FaAddressCard, FaGraduationCap, FaCode, FaDog } from "react-icons/fa";


const Home: React.FC = () => {
  const rotatingTextItems = ['Web developer', 'React developer', 'Typescript developer']
  const navLinks = [
    {
      title: 'Home',
      icon: <FaHome />,
    },
    {
      title: 'About',
      icon: <FaAddressCard />,
    },
    {
      title: 'Resume',
      icon: <FaGraduationCap />,
    },
    {
      title: 'Portifolio',
      icon: <FaCode />,
    },
    {
      title: 'Contact',
      icon: <FaDog />,
    },
  ]
  return (
    <Container>

      <NavDrawer links={navLinks}/>

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
        <img src="./images/Obama.png" alt="" />
      </Media>
    </Container>
  )
}

export default Home;