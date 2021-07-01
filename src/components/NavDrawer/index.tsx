import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Container, List } from './styles';
import { FaPlus, FaMinus, FaAddressCard, FaCode, FaDog, FaGraduationCap, FaHome } from "react-icons/fa";
import MediaMatch from '../MediaMatch';

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
                    <MediaMatch hideOnMobileLessIpad>
                      <span className="title">{title}</span>
                    </MediaMatch>
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </List>
        
        <MediaMatch hideOnMobile>
          <div className="toggle" onClick={activeMenu}>
            {
              isMenuActive === false 
              ?
              <FaPlus />
              :
              <FaMinus />
            }
          </div>
        </MediaMatch>

        
      </div>
    </Container>
  )
}

export default NavDrawer;