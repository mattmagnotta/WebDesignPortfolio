import React from "react";
import { Random } from "react-animated-text";
import ReactDOM from "react-dom";
import Particles from 'react-particles-js';
import { Redirect } from "react-router-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs";
import webMockup from "../Assets/webMockup.png";
import Intro from "./Intro.js";
import CardCarousel from "./CardCarousel"
import Card from "./Card.js";
import arrow from "../Assets/arrow.png";
import ideaMockup from "../Assets/ideaMockup.png";
import Button from "@material-ui/core/Button";
import MobileProjectCards from './MobileProjectCards.js'
import MobileContact from './MobileContact.js'
import { SocialIcon } from 'react-social-icons';

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

class About extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)}  pages={6}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#123764' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
        <ParallaxLayer offset={4} speed={1} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
        <ParallaxLayer offset={5} speed={1} style={{backgroundColor: '#123764', backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

        <ParallaxLayer offset={1.2} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '80%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>



        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.1} speed={-0.2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={url('earth')} style={{ width: '50%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={4.2} speed={0.5} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%', }} />

        </ParallaxLayer>



        // first layer
        <ParallaxLayer
        class="rellax" data-rellax-speed="7" data-rellax-xs-speed="-5" data-rellax-mobile-speed="3" data-rellax-tablet-speed="-8" data-rellax-desktop-speed="1"
          offset={0}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div id='introcontainer'>
            <img src={webMockup} style={{maxWidth:'50vw', minWidth:'50%',margin:'0 auto' }} />
            <div id='introTextContainer'>
              <Intro/>
              <div className='whitespace'> </div>
              <h3 class="introText">I'm a full stack web developer</h3>
              <h3 class="introText">To learn more about me keep scrolling...</h3>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center',  justifyContent: 'center' }}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', margin:'0 10px',bottom:'20%'}}>
              <h1 className='bold' style={{display:'flex', flexDirection:'column', justifyContent:'center',}}> Overview </h1>
              <p className='boldP'> Hi there, thanks for checking out my page. This website was designed to be viewed in fullscreen for the best viewing experience. Now that that's out of the way lets get into it...</p>
               <p className='boldP'>I was honorably discharged from the United States Army in 2017. Since then, I have devoted most of my time into learning software development. Its been an interesting ride to say the least, I cant imagine my life without code today. I love everything about the development process. From customizing my text editor to implementing a binary search algorithm, I just cant get enough. When im not writing code, you can find me in the backcountry with my dog & camera.</p>
            </div>

        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={-0}
          horizontal={true}
          style={{ display: 'flex',alignItems: 'center', justifyContent: 'center' }}>
          <div id='projectContainer' >
          <div id='projectCardsDiv'>
            <h1 style={{marginBottom:'50px', color:'white !important'}} className='bold' id='ProjectTitle'>Featured</h1>
            <div id='ProjectCardContainer'>
              <MobileProjectCards/>
            </div>
          </div>
        </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' ,flexDirection:'row'}}
          >
          <div id='contactContainer'>
          <div id='projectCardsDiv'>
            <h1 style={{marginBottom:'50px'}} className='bold' id='ProjectTitle'>Get in touch</h1>
            <div id='SocialIcon'>
              <SocialIcon url="https://www.linkedin.com/in/matthew-magnotta-a74840132/" style={{margin:'0 10px'}}/>
              <SocialIcon url="https://github.com/mattmagnotta" />
              <SocialIcon url="https://www.instagram.com/matt.magnotta/?hl=en" style={{margin:'0 10px'}}/>
              <SocialIcon url="https://aqueous-gorge-46064.herokuapp.com/" style={{margin:'0 10px'}}/>
            </div>
            <div id='footerContainer'>
              <MobileContact/>
            </div>
          </div>
        </div>
        </ParallaxLayer>
      </Parallax>
    )
  }
}



export default About
