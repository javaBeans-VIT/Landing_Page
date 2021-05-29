import React from "react";
import "./hamburger.style.css";
import { Sidebar } from "./sidebar.component";
import "./landing.style.css";
import ReactAnime from "react-animejs";
const { Anime, stagger } = ReactAnime;

export const Landing = () => (
  <div id="Landing">
    <div id="one" className="part">
      <div id="navbar-top">
        <div
          className="outer-ham"
          onClick={() => {
            document.getElementById("1").classList.toggle("rot-down");
            document.getElementById("3").classList.toggle("rot-up");
            document.getElementById("2").classList.toggle("slide");

            document
              .getElementById("sidebar-control")
              .classList.toggle("sidebar-slide");
          }}
        >
          <div className="inner-ham">
            <div className="menu" id="1"></div>
            <div className="menu" id="2"></div>
            <div className="menu" id="3"></div>
          </div>
          <div id="sidebar-control">
            <Sidebar />
          </div>
        </div>
      </div>
      <Anime
        _onUpdate={[
          {
            targets: "#herotxt",
            translateY: -100,
            easing: "easeInOutSine",
            opacity: 1,
            duration: 2000,
            loop: "true",
            autoplay: true,
            autoplay: true,
          },
        ]}
      >
        <div id="herotxt">coviDB</div>
      </Anime>
      <a id="down-anchor" href="#two">
        <div id="down">Click here for next section</div>
      </a>
    </div>
    <div id="two" className="part">
      <div id="inner-two">
        <div id="head-two">Our Products:</div>
        <div id="description-two">
          We, Team JavaBeans have developed a web application, alongwith an
          Android Mobile Application, each of which provides the user with some
          common and some unique features.
        </div>
        <div id="main-two">
          <a id="main-two-one" href="#three">
            <div className="box"></div>
          </a>
          <a id="main-two-two" href="#footer">
            <div className="box"></div>
          </a>
        </div>
      </div>
    </div>
    <div id="three" className="part">
      <div id="three-inner">
        <div id="three-head">coviDB Web Application</div>
        <div id="three-description">
          Our Web Application has numerous features which have been listed
          below, all developed with the sole intention of providing the user
          everything they need, at one place.
        </div>
        <div id="three-main">
          <div className="grp">
            <div className="card">Live Trends</div>
            <div className="card">Hospital Locator</div>
          </div>
          <div className="grp">
            <div className="card">Live Resource Updates</div>
            <div className="card">Triage Chat Bot</div>
          </div>
          <div className="grp">
            <div className="card">Twitter Bot</div>
            <div className="card">
              Country Wise vaccination Prediction and Visualization
            </div>
          </div>
          <a className='hide' href=""><div className='card' id="link-web">
            Visit Our Web Application
          </div></a>
        </div>
      </div>
    </div>
    <div id="four" className="part">
      <div id="three-inner">
        <div id="three-head">coviDB Android Application</div>
        <div id="three-description">
          Our Android Mobile Application brings the experience of our product to
          the user's Mobile phone. Tonnes of information are now at your
          disposal. The app also has many other features in it, as displayed below:
        </div>
        <div id="three-main">
          <div className="grp">
            <div className="card">Review Form</div>
            <div className="card">Health Fitness Tracker</div>
          </div>
          <div className="grp">
            <div className="card">Secure Login</div>
            <div className="card">Helpline Information</div>
          </div>
          <div className="grp">
            <div className="card">Global Covid Case enumaration</div>
          </div>
          <a className='hide' href="#"><div className='card' id="link-web">
            Download Our Android Application
          </div></a>
        </div>
      </div>
    </div>
    <div id="footer">
        <div id="content">
            Designed and Developed with <span>♥</span> by <a traget="_blank" id='javabeans' href="https://github.com/javaBeans-VIT">JavaBeans</a>

        </div>
    </div>
  </div>
);
