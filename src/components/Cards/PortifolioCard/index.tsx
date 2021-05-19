import React from 'react';
import { Container } from './styles';

interface PortifolioCardProps {
  children: string
  title: string
  link?: string
  buttonLabel?: string
  img: string
}

const PortifolioCard: React.FC<PortifolioCardProps> = ({ children, title, img,
  link = '#',
  buttonLabel = 'Read More'
  }) => {

  return (
    <Container>
        <div className="face face1">
          <div className="content">
            <h2>{title}</h2>
            <p>{children}</p>
            <a href={link} target="_blank" rel="noreferrer">{buttonLabel}</a>
          </div>
        </div>
        <div className="face face2">
          <img src={img} alt={title} />
        </div>
    </Container>
  )
}

export default PortifolioCard;