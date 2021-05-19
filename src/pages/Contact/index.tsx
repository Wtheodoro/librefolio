import React from 'react';
import Title from '../../components/Title';
import { pageVariants, pageTransition } from '../../assets/framerMotion'
import { Container, Media, Content, Segment } from './styles';
import Form from '../../components/Form';

const Contact: React.FC = () => {
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
        <Title>CONTACT ME</Title>
        <h1>Get in touch with me today</h1>
        <Segment />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quis ex recusandae ad rem accusamus temporibus perspiciatis non quas dolorum accusantium adipisci, iusto mollitia deserunt, quos assumenda, obcaecati eveniet impedit.</p>
        
        <Form />
        
      </Content>
    </Container>
  );
}

export default Contact;