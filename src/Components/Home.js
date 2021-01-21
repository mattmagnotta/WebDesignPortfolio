import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div id="landingContainer">
        <div id="logoDiv">
          <svg
            class="logoSVG"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width="410.01"
            height="502.88"
            viewBox="0 0 410.01 502.88"
          >
            <g id="Artboard_1" data-name="Artboard 1">
              <path
                class="path"
                d="M456,528V137L658,271,863,137v53L659,323,500,218V500Z"
                transform="translate(-455.5 -136.07)"
                fill="none"
                stroke="white"
                stroke-width="3px"
                stroke-linecap="round"
                stroke-miterlimit="10"
              />
              <path
                class="path"
                d="M865,247l-1.69,391L661.73,503.14,456,636.25l.23-53L661,451.13,819.62,556.82l1.22-282Z"
                transform="translate(-455.5 -136.07)"
                fill="none"
                stroke="white"
                stroke-linecap="round"
                stroke-width="3px"
              />
            </g>
          </svg>
        </div>
        <div id="buttonDiv">
          <div class="buttonContainer">
            <Link id="curiosLink" to="/about">
              <p class="animated-word">CURIOUS?</p>
            </Link>
          </div>
        </div>

      </div>
    );
  }
}
export default Home;
