import React from 'react';
import './App.css';
// Components
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import MySkills from './Components/MySkills'
import Particles from "react-particles-js";
//Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Particles/>
    <Router>
     <div >
       <ul id="navBar">
         <li>
           <Link className="link" to="/">Home</Link>
         </li>
         <li>
           <Link className="link" to="/about">About</Link>
         </li>
         <li>
           <Link className="link" to="/skills">My Skills</Link>
         </li>
         <li>
           <Link className="link" to="/projects">Projects</Link>
         </li>
         <li>
           <Link className="link" to="/contact">Contact</Link>
         </li>
       </ul>

       <hr />

       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route exact path="/about">
           <About/>
         </Route>
         <Route exact path="/skills">
           <MySkills/>
         </Route>
         <Route exact path="/contact">
           <Contact/>
         </Route>
         <Route exact path="/projects">
           <Projects/>
         </Route>
       </Switch>
     </div>
   </Router>
 )
}

export default App;
