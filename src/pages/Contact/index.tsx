import React from 'react';
import Title from '../../components/Title';
import { pageVariants, pageTransition } from '../../assets/framerMotion'
import { Container, Media, Content, Segment } from './styles';
import Form from '../../components/Form';
import MediaMatch from '../../components/MediaMatch';

const Contact: React.FC = () => {
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
        <Title>CONTACT ME</Title>
        <h1>Get in touch with me today</h1>
        <Segment />
        {/* <p>If you want to say something, here is the place.</p> */}
        
        <Form />
        
      </Content>
    </Container>
  );
}

export default Contact;