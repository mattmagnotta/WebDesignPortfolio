
import './App.css';
import Particles from 'preact-particles';
// Components
import NavBar from './Components/NavBar'
import React from 'react';
import About from './Components//About'
import Home from './Components//Home'
import Contact from './Components//Contact'
import Resume from './Components/Resume/Resume.js'

//Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//media query
import { useMediaQuery } from 'react-responsive'
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

function App() {
  return (
    <div>

      <Mobile>Mobile</Mobile>
      <Default>

        <Router>

         <Switch>
           <Route exact path="/">
             <Home/>
           </Route>
           <Route exact path="/about">
             <About/>
           </Route>
           <Route exact path="/skills">

           </Route>
           <Route exact path="/contact">
             <Contact/>
           </Route>
           <Route exact path="/resume">
             <Resume/>
           </Route>


         </Switch>
        </Router>
      </Default>

    </div>
 )
}
export default App
