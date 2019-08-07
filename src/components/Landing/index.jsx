import React from 'react';

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

import * as COLORS from '../../constants/colors';
import menuColor from '../../functions/menuColor';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      doMenuOpen: false,
      doMenuClose: false,
      isMenuReady: true,

      menuColorFocus: 0,
    };
  }

  toggleMenu = () => {
    if(this.state.isMenuReady === false) return;
    this.setState(prevState => ({
       doMenuOpen: prevState.isMenuOpen ? false : true,
       doMenuClose: prevState.isMenuOpen ? true : false,
       isMenuOpen: !prevState.isMenuOpen,
       isMenuReady: false
     }));
    setTimeout(() => {this.setState({isMenuReady: true})}, 3300);
  }

  setMenuFocus = (event) => {
    this.setState({
      menuColorFocus: event.currentTarget.dataset.focusid
    }, () => {console.log(this.state.menuColorFocus)});
  }

  resetMenuFocus = (event) => {
    this.setState({
      menuColorFocus: 0
    }, () => {console.log(this.state.menuColorFocus)});
  }

  componentDidUpdate() {
    if(this.state.doMenuOpen | this.state.doMenuClose) {
      this.setState(prevState => ({
        doMenuOpen: false,
        doMenuClose: false,
      }));
    }
  }

  componentDidMount() {
      document.title = "<AD2969 /> Landing Page";
  }

  render() {
    var {color1, color2, bcolor} = menuColor(this.state.menuColorFocus);

    return(
      <div className="page-container">
        <ThreeBackground />
        <SimpleHeader isMenuOpen      = {this.state.isMenuOpen}
                      isTransition    = {!this.state.isMenuReady}
                      toggleMenu      = {this.toggleMenu}
                      color1          = {color1}
                      color2          = {color2}
                      backgroundColor = {bcolor}
        />
        <NavMenu  visible       = {this.state.isMenuOpen}
                  doOpen        = {this.state.doMenuOpen}
                  doClose       = {this.state.doMenuClose}
                  isTransition  = {!this.state.isMenuReady}
                  setFocus      = {this.setMenuFocus}
                  resetFocus    = {this.resetMenuFocus}
        />

        <div className="landing">
          <div className="landing__icons">
            <a href="https://www.linkedin.com/in/clarence-adrian" target="_blank" rel="noopener noreferrer"
               className="circleclick--effect" onClick={circleClick}>
               <LinkedInIcon color1={COLORS.OCEANPALETTE.color1} color2={COLORS.OCEANPALETTE.color2}/>
            </a>
            <a href="https://codepen.io/ad2969/" target="_blank" rel="noopener noreferrer"
               className="circleclick--effect" onClick={circleClick}>
               <TwitterIcon color1={COLORS.OCEANPALETTE.color1} color2={COLORS.OCEANPALETTE.color2}/>
            </a>
            <a href="https://twitter.com/ad2969" target="_blank" rel="noopener noreferrer"
               className="circleclick--effect" onClick={circleClick}>
               <GithubIcon color1={COLORS.OCEANPALETTE.color1} color2={COLORS.OCEANPALETTE.color2}/>
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

export default LandingPage
