import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Portifolio from '../pages/Portifolio';
import Resume from '../pages/Resume';

const Routes: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portifolio" exact component={Portifolio} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </AnimatePresence>
  )
}

export default Routes;