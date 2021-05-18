import React from "react";
import { FaHome, FaAddressCard, FaGraduationCap, FaCode, FaDog } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom"
import NavDrawer from "./components/NavDrawer";
import Routes from './routes'
import GlobalStyles from "./styles/GlobalStyles";

function App() {
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
    <div className="App" style={{ overflow: "hidden"}}>
      <GlobalStyles />
      <BrowserRouter>
        <NavDrawer links={navLinks}/>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
