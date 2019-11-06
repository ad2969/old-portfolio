import React from 'react';
import { withRouter } from "react-router";

import SimpleHeader from '../header/simpleHeader';
import NavMenu from '../navmenu/navMenu';

import ThreeBackground from './threeBackground';
// import ThreeExample from './threeExample';

import TitleOne from './title1';
import TitleTwo from './title2';
import TitleThree from './title3';
import LinkedInIcon from '../icons/linkedIn';
import GithubIcon from '../icons/github';
import TwitterIcon from '../icons/twitter';

import { circleClick } from 'functions/anims';
import menuColor from 'functions/menuColor';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFrontend: true }
  }

  changeFrontend = () => {
    this.setState((prevState) => {
      return { isFrontend: !prevState.isFrontend }
    })
  }

  componentDidMount() {
    document.title = "<AD2969 /> Landing Page";
    this.props.resetMenuFocus(this.props.menuId);
  }
  componentWillUnmount() {
    if (this.props.location !== this.props.prevLocation && this.props.isMenuOpen)
      this.props.toggleMenu();
  }

  render() {
    const isFrontend = this.state.isFrontend
    let three;
    if(isFrontend) three = <ThreeBackground />;
    else three = "";

    const {color1, color2, bcolor} = menuColor(this.props.menuColorFocus);

    return(
      <div className="page-container">
        {three}
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

        <div className="landing">
          <div className="landing__icons">
            <a href="https://www.linkedin.com/in/clarence-adrian" target="_blank" rel="noopener noreferrer"
               className="circleclick--effect" onClick={circleClick}>
               <LinkedInIcon color1={color1} color2={color2}/>
            </a>
            <a href="https://twitter.com/ad2969" target="_blank" rel="noopener noreferrer"
               className="circleclick--effect" onClick={circleClick}>
               <TwitterIcon color1={color1} color2={color2}/>
            </a>
            <a href="https://github.com/ad2969" target="_blank" rel="noopener noreferrer"
               className="circleclick--effect" onClick={circleClick}>
               <GithubIcon color1={color1} color2={color2}/>
            </a>
          </div>
          <div className="landing__name">Clarence Adrian</div>
          <div className="landing__title">
            <div className="landing__title__svg a"><TitleOne color1={color1} color2={color2}/></div>
            <div className="landing__title__svg b"><TitleTwo color1={color1} color2={color2}/></div>
            <div className="landing__title__svg c"><TitleThree color1={color1} color2={color2}/></div>
          </div>
          <p className="landing__desc">
            Currently undergoing my undergraduate studies in Vancouver, Canada, and actively looking for Co-Op and Intern opportunities
            as a <span className="t--bold" style={{color: color2}}>Full-Stack Developer</span>
            <span className="t--bold" style={{color: color1}}>/ Software Engineer</span>
          </p>
        </div>
        <div class="b--bottom-right">
          <span style={{paddingLeft: "1.5rem"}}>PROGRAM</span>
          <label class="switch">
            <input type="checkbox" checked={isFrontend} onChange={this.changeFrontend}></input>
            <span class="slider round"></span>
          </label>
          <span style={{paddingRight: "1.5rem"}}>DESIGN</span>
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage)
