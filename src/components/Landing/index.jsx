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

import { circleClick } from '../../functions/anims';

import menuColor from '../../functions/menuColor';

class LandingPage extends React.Component {
  componentDidMount() {
    document.title = "<AD2969 /> Landing Page";
    this.props.resetMenuFocus(this.props.menuId);
  }
  componentWillUnmount() {
    if (this.props.location !== this.props.prevLocation && this.props.isMenuOpen)
      this.props.toggleMenu();
  }

  render() {
    var {color1, color2, bcolor} = menuColor(this.props.menuColorFocus);

    return(
      <div className="page-container">
        <ThreeBackground />
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
            <a href="https://codepen.io/ad2969/" target="_blank" rel="noopener noreferrer"
               className="circleclick--effect" onClick={circleClick}>
               <TwitterIcon color1={color1} color2={color2}/>
            </a>
            <a href="https://twitter.com/ad2969" target="_blank" rel="noopener noreferrer"
               className="circleclick--effect" onClick={circleClick}>
               <GithubIcon color1={color1} color2={color2}/>
            </a>
          </div>
          <div className="landing__name">Clarence Adrian</div>
          <div className="landing__title">
            <div className="landing__title__svg a"><TitleOne/></div>
            <div className="landing__title__svg b"><TitleTwo/></div>
            <div className="landing__title__svg c"><TitleThree/></div>
          </div>
          <p className="landing__desc">
            Currently undergoing my undergraduate studies in Vancouver, Canada, and actively looking for Co-Op and Intern opportunities
            as a <span className="t--green t--bold">Full-Stack Developer / Software Engineer</span>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage)
