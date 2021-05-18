import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, List } from './styles';
import { FaPlus, FaMinus } from "react-icons/fa";


interface NavDrawerProps {
  links: {
    title: string
    icon?: any
    link: string
  }[]
}

const NavDrawer: React.FC<NavDrawerProps> = ({ links }) => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
  const activeMenu = () => {
    setIsMenuActive(!isMenuActive)
  }
  return (
    <Container>
      <div className="navigation">
        <List menuActive={isMenuActive}>
          <ul>
            {
              links?.map(({ icon, title, link }) => (
                <li key={title}>
                  <Link to={link}>
                    <span className="icon">{icon}</span>
                    <span className="title">{title}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
        </List>
        
        <div className="toggle" onClick={activeMenu}>
          {
            isMenuActive === false 
            ?
            <FaPlus />
            :
            <FaMinus />
          }
        </div>
      </div>
    </Container>
  )
}

export default NavDrawer;