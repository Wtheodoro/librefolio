import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Container, List } from './styles';
import { FaPlus, FaMinus, FaAddressCard, FaCode, FaDog, FaGraduationCap, FaHome } from "react-icons/fa";

const NavDrawer: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
  const activeMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  const navLinks = [
    {
      title: 'Home',
      icon: <FaHome />,
      link: "/"
    },
    {
      title: 'About',
      icon: <FaAddressCard />,
      link: "/about"
    },
    {
      title: 'Resume',
      icon: <FaGraduationCap />,
      link: "/resume"
    },
    {
      title: 'Portifolio',
      icon: <FaCode />,
      link: "/portifolio"
    },
    {
      title: 'Contact',
      icon: <FaDog />,
      link: "/contact"
    },
  ]

  
  return (
    <Container>
      <div className="navigation">
        <List menuActive={isMenuActive}>
          <ul>
            {
              navLinks?.map(({ icon, title, link }) => (
                <li key={title}>
                  <NavLink 
                    to={link}
                    activeStyle={{
                      color: "var(--gray)"
                    }}  
                    exact
                  >
                    <span className="icon">{icon}</span>
                    <span className="title">{title}</span>
                  </NavLink>
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