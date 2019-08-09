import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import { withRouter } from "react-router";

import SimpleHeader from '../header/simpleHeader';
import NavMenu from '../navmenu/navMenu';

import COLORS from 'styles/base/_variables.scss';
import menuColor from 'functions/menuColor';

const colorArray = [
  '#7f00ff',
  '#ff00ff',
  '#0000ff',
  '#007fff',
  '#00ffff'
];

class AboutMePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolling: false,
      scrollPosition: 0,
    };
  }

  componentDidMount() {
    document.title = "<AD2969 /> About Me";
    this.props.resetMenuFocus(this.props.menuId);

    const covers = document.getElementsByClassName('about__cover');
    const texts = document.getElementsByClassName('about__text');

    const timeDelay = this.props.isMenuOpen ? 3300 : 0;
    console.log(this.props.isMenuOpen);

    for( let i = 0; i < covers.length; i++ ) {
      covers[i].style.backgroundColor = this.randomColor();
      setTimeout( () => {
        covers[i].classList.toggle('active');
        texts[i].classList.toggle('active');
      }, i * 50 + timeDelay);
    }

  }

  randomColor = () => {
    return colorArray[Math.floor(Math.random()*colorArray.length)];
  }

  handleScroll = () => {
    if(this.state.isScrolling) return;

    const newPosition = window.scrollY;
    if( newPosition > this.state.scrollPosition ) {
      this.setState({isScrolling: true});
      console.log("Scrolling to next!");
    }
    else if( newPosition < this.state.scrollPosition ) {
      this.setState({isScrolling: true});
      console.log("Scrolling to previous!");
    }

    setTimeout(() => {
      this.setState({isScrolling: false});
      console.log("Scrolling reset!");
    }, 3000);
  }

  componentWillUnmount() {
    if (this.props.location !== this.props.prevLocation && this.props.isMenuOpen)
      this.props.toggleMenu();
  }

  render() {
    const {color1, color2, bcolor} = menuColor(this.props.menuColorFocus);

    return(
      <div className="page-container page-container--about">
        <SimpleHeader isMenuOpen      = {this.props.isMenuOpen}
                      isTransition    = {!this.props.isMenuReady}
                      toggleMenu      = {this.props.toggleMenu}
                      color1          = {color1}
                      color2          = {color2}
                      backgroundColor = {bcolor}
        />
        <NavMenu  menuId        = {this.props.menuId}
                  visible       = {this.props.isMenuOpen}
                  doOpen        = {this.props.doMenuOpen}
                  doClose       = {this.props.doMenuClose}
                  isTransition  = {!this.props.isMenuReady}
                  setFocus      = {this.props.setMenuFocus}
                  resetFocus    = {this.props.resetMenuFocus}
        />

        <ReactFullpage
          scrollOverflow={true}
          sectionsColor={[ COLORS.crpytomedium,
                           COLORS.crpytoc1,
                           COLORS.crpytoc2,
                           COLORS.crpytomedium,
                           COLORS.crpytomedium,
                           COLORS.crpytomedium ]}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section about-1">
                  <div className="section-div">

                    <div className="about__welcome">
                      <h1>Welcome to <span className="about__text--colored2">My Profile!</span></h1>
                    </div>

                    <ul>
                    <li>
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">My name is Clarence Adrian,</span>
                    </div>
                    </div>
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">and I am a second year student</span>
                    </div>
                    </div>
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">at the University of British Columbia,</span>
                    </div>
                    </div>
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">which is located in <span className="about__text--colored">Vancouver, Canada</span></span>
                    </div>
                    </div>
                    </li>

                    <li>
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">Currently studying as an electrical engineer,</span>
                    </div>
                    </div>
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">I am also a passionate student</span>
                    </div>
                    </div>
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">of <span className="about__text--colored">web and software development</span></span>
                    </div>
                    </div>
                    </li>

                    </ul>
                    </div>
                    </div>
                <div className="section about-2">
                  <div className="section-div">
                    <ul>

                    <li className="section2--about">
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">I am currently looking for</span>
                    </div>
                    </div>
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">Co-Op and internship opportunities</span>
                    </div>
                    </div>
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">as a <span className="about__text--colored">full-stack developer</span></span>
                    </div>
                    </div>
                    </li>

                    <li>
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">If you know someone <span className="about__text--colored">currently hiring,</span></span>
                    </div>
                    </div>
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">want to <span className="about__text--colored">start a project with me,</span></span>
                    </div>
                    </div>
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">or simply want to <span className="about__text--colored">chat over some coffee,</span></span>
                    </div>
                    </div>
                    <div>
                    <div className="about__line">
                    <div className="about__cover"></div>
                    <span className="about__text">I would be delighted to get in touch!</span>
                    </div>
                    </div>
                    </li>

                    </ul>
                  </div>
                </div>
                <div className="section about-3">
                  <div className="section-div" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <h1>THIS WEB IS STILL A WORK-IN-PROGRESS</h1>
                    <h1>See an older version <a href="https://2019-ad2969.netlify.com">here</a></h1>
                  </div>
                </div>
                <div className="section about-4">
                  <div className="section-div" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <h1>THIS WEB IS STILL A WORK-IN-PROGRESS</h1>
                    <h1>See an older version <a href="https://2019-ad2969.netlify.com">here</a></h1>
                  </div>
                </div>
              </div>
            );
          }}
          />

      </div>
    );
  }
}

export default withRouter(AboutMePage)
