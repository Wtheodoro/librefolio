import React from 'react';
import { Container } from './styles';

interface SkillCardProps {
  children?: string
  title?: string
  icon?: React.ReactNode
}

const SkillCard: React.FC<SkillCardProps> = ({ children, title, icon }) => {
  return (
    <Container>
      <div className="icon">
        <div className="circle"/>
        {icon}
      </div>
      <div className="skill">
        <h2>{title}</h2>
        <p>
          {children}
        </p>
      </div>

    </Container>
  )
}

export default SkillCard;