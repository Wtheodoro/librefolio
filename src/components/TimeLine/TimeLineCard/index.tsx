import React from 'react';
import { Container, Header, Content } from './styles';

interface TimeLineCardProps {
  title: string
  subtitle: string
  children: string
  icon: any
}

const TimeLineCard: React.FC<TimeLineCardProps> = ({ children, subtitle, title, icon }) => {
  return (
    <Container>
      <Header>
        <div className="icon">
          <div className="dot">
            {icon}
          </div>
        </div>
        <div className="title">
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
      </Header>
      <Content>{children}</Content>
      <div className="hline"/>
      <div className="vline"/>
    </Container>
  )
}

export default TimeLineCard;