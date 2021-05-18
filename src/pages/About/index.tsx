import React from 'react';
import SkillCard from '../../components/SkillCard';
import Title from '../../components/Title';
import { pageVariants, pageTransition } from '../../assets/framerMotion'
import { Container, Media, Content } from './styles';

const About: React.FC = () => {
  return (
      <Container
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Media>
          <img src="./images/chris-brown.jpg" alt="Chris brown sentado a pampa" />
        </Media>

        <Content>
          <Title>ABOUT ME</Title>
          <h1>Hello, I am Walison Teodoro.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quis ex recusandae ad rem accusamus temporibus perspiciatis non quas dolorum accusantium adipisci, iusto mollitia deserunt, quos assumenda, obcaecati eveniet impedit.</p>
          <div className="all-skills">
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
          </div>
        </Content>
      </Container>
  );
}

export default About;