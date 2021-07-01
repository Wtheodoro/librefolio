import React from 'react';
import SkillCard from '../../components/Cards/SkillCard';
import Title from '../../components/Title';
import { pageVariants, pageTransition } from '../../assets/framerMotion'
import { Container, Media, Content, Segment } from './styles';
import { CgWebsite } from 'react-icons/cg'
import { RiReactjsLine } from 'react-icons/ri'
import { SiTypescript, SiRedux, SiHtml5, SiCss3 } from 'react-icons/si'
import MediaMatch from '../../components/MediaMatch';


const About: React.FC = () => {
  const cards = [
    {
      title: "Front-end Developer",
      icon: <CgWebsite/>,
      // children: "Ainda não sei o que escrever aqui, mas escreverei"
    },
    {
      title: "Typescript",
      icon: <SiTypescript/>,
      // children: "Ainda não sei o que escrever aqui, mas escreverei"
    },
    {
      title: "React",
      icon: <RiReactjsLine/>,
      // children: "Ainda não sei o que escrever aqui, mas escreverei"
    },
    {
      title: "Redux",
      icon: <SiRedux/>,
      // children: "Ainda não sei o que escrever aqui, mas escreverei"
    },
    {
      title: "HTML",
      icon: <SiHtml5/>,
      // children: "Ainda não sei o que escrever aqui, mas escreverei"
    },
    {
      title: "CSS",
      icon: <SiCss3/>,
      // children: "Ainda não sei o que escrever aqui, mas escreverei"
    }
  ]
  return (
      <Container
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <MediaMatch hideOnMobileLessIpad>
          <Media>
            <img src="./images/chris-brown.jpg" alt="Chris brown sentado a pampa" />
          </Media>
        </MediaMatch>
        
        <Content>
          <Title>ABOUT ME</Title>
          <h1>Hello, I am Walison Teodoro.</h1>
          <Segment />
          <p>
            Graduated in civil engineering, currently graduating studies on software development. For the past few years I have been working on web applications, involved in build React applications, APIs integration and other things more.
          </p>

          <div className="all-skills">
            {
              cards.map((card) => (
                <SkillCard {...card}/>
              ))
            }
          </div>
        </Content>
      </Container>
  );
}

export default About;