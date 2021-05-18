import React from 'react';
import { Container } from './styles';
import { CgWebsite } from 'react-icons/cg'

const SkillCard: React.FC = () => {
  return (
    <Container>
      <div className="icon">
        <div className="circle"/>
        <CgWebsite />
      </div>
      <div className="skill">
        <h2>Front-end developer</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eveniet repel
        </p>
      </div>

    </Container>
  )
}

export default SkillCard;