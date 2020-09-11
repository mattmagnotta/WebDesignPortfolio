import React from "react";
import { Random } from "react-animated-text";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs";
import webMockup from "../Assets/webMockup.png";
import beardguy from "../Assets/beardguy.png";
import Intro from "./Intro.js";
import Card from "./Card.js";
import arrow from "../Assets/arrow.png";
import ideaMockup from "../Assets/ideaMockup.png";
import Button from "@material-ui/core/Button";

// Little helpers ...

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToContact: false,
      redirectToResume: false,
    };
    this.handleContactClick = this.handleContactClick.bind(this);
    this.handleResumeClick = this.handleResumeClick.bind(this);
  }
  handleContactClick() {
    console.log("handleClick");
    this.setState({ redirectToContact: true });
  }
  handleResumeClick() {
    console.log("handleClick");
    this.setState({ redirectToResume: true });
  }
  render() {
    if (this.state.redirectToContact) {
      return <Redirect push to="/contact" />;
    }
    if (this.state.redirectToResume) {
      return <Redirect push to="/Resume" />;
    }
    return (
      <div id="parallaxContainer">
        <Parallax ref={(ref) => (this.parallax = ref)} pages={3}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#123764" }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#87BCDE" }}
          />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
              display: "flex",
            }}
          />

          <ParallaxLayer
            offset={1.3}
            speed={-0.1}
            style={{

            }}
          >
          <div id="idkatthispoint">
            <div className='aboutContainer'>
              <div id="aboutDivs">
              <h1 className="bold">WHO</h1>
              <h3 className="boldH2">am I? </h3>
              <p className="boldP">  I am many things. Lets go with the title of a universal
                problem solver with a look-see-do style. I look at something,
                I learn it, then I do it. I atteneded PDX Code Guild to tailor
                to that learning style in early 2019. While there I learned full
                stack web development with Python, Django, & JavaScript. I then
                went back for more schooling in their advanced javascript course
                to lern the MERN stack. I am currently available for work.{" "}
                </p>
              </div>
              <div id="aboutDivs">
              <h1 className="bold">WHAT</h1>
              <h2 className="boldH2">I can do for you?</h2>
              <p className="boldP">
                Well I can do lots of things, do you need someone to manage the
                front-end? I can do it. Need someone to handle the backend? I
                can do it. Need someone who dables in both? I can do it. Im your
                go-to guy. I will put in whatever amount of work is nessecary to
                get the job done. The software industry is vast, I am open to learning any new technologies that will contribute to the success of a project.                          {" "}
              </p>
              </div>
              <div id="aboutDivs">
              <h1 className="bold">WHY</h1>
              <h2 className="boldH2"> do I want to do that?</h2>
              <p className="boldP">
                I have many reasons why, but the main one is having a deep passion for technology. Life to me isnt about
                materialistic things, its about having skill. My happiness comes
                from putting my mind to something and succeding. I enjoy building things, especially when I get to build them with a computer. I am a very
                driven indvidual & I am very motivatied when it comes to writing
                clean code.
              </p>
              </div>
            </div>
          </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "20%",
                marginLeft: "10%",
                marginTop: "40%",
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.75}
            speed={0.5}
            style={{ opacity: 0.1 }}
          ></ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "10%" }}
            />
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "20%",
                marginLeft: "75%",
                marginTop: "-6%",
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.1} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={url("cloud")}
              style={{
                display: "block",
                width: "20%",
                marginLeft: "75%",
                marginTop: "-5%",
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.4}
            speed={0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flexend",
              pointerEvents: "none",
              paddingBottom: "50px",
            }}
          >
            <img src={arrow} style={{ width: "10%", marginLeft: "90%" }} />
            <img src={beardguy} style={{ width: "10%" }} />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={-0.3} />

          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          <div id='introcontainer'>
              <img src={webMockup} style={{ width: "30%", paddingRight:'20px' }} />
                <div id="introHeaders">
                  <Intro />
                  <div id='introTextDiv'>
                    <h3  class="introText">
                      <Random
                        text="I'm a full stack web developer"
                        paused={this.state.paused}
                        iterations={1}
                        effect="verticalFadeIn"
                        effectChange={3}
                        effectDirection="up"
                      />
                    </h3>
                    <h3 class="introText">
                      {
                        <Random
                          text="To learn more about me keep scrolling..."
                          paused={this.state.paused}
                          iterations={1}
                          effect="verticalFadeIn"
                          effectChange={3}
                          effectDirection="down"
                        />
                      }
                    </h3>
                  </div>
                </div>
              </div>

          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "space-between",
              justifyContent: "space-between",
            }}
          >
            <img src={ideaMockup} style={{ width: "38%" }} />
            <div
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "80px",

              }}
            >
              <h2 className="boldH2">
                I am more familar/comfortable using front end technologies such
                as React & JS. This website was built using React but I am also capable of writing backend code to
                deal with servers & databases, such as handling the contact portion of this website. If you have any questions about the funcitonality of this site, I would be more than happy to step through my code.
              </h2>

              <h2 className="boldH2">
                If you think we would make a good team, dont hesitate to contact
                me. If you still arent sold, click on the card to the left to
                view a more detailed resume.
              </h2>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            // onClick={() => this.parallax.scrollTo(2)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "350px",
            }}
          >
            <div id="pText"></div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div id="cardContainer">
              <div onClick={this.handleResumeClick}>
                <Card />
              </div>
              <div id="talkDiv">
                <br />
                <h2 id="readyToTalk" className="boldH2contact">
                  READY TO TALK?
                </h2>
                <br />
                <Button
                  onClick={this.handleContactClick}
                  style={{
                    backgroundColor: "#4818BA",
                    borderRadius: 5,
                    border: 0,
                    color: "white",
                    height: 48,
                    padding: "0 ",

                    width: "200px",
                  }}
                  type="submit"
                  variant="contained"
                >
                  CONTACT
                </Button>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}
export default About;
