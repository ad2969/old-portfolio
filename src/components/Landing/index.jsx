import React from 'react';

import SimpleHeader from '../header/simpleHeader';
import NavMenu from '../navmenu/navMenu';

import ThreeBackground from './threeBackground';
// import ThreeExample from './threeExample';

import TitleOne from './title1';
import TitleTwo from './title2';
import TitleThree from './title3';
import LinkedInIcon from '../icons/linkedIn';
import CodepenIcon from '../icons/codepen';
import TwitterIcon from '../icons/twitter';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      doMenuOpen: false,
      doMenuClose: false,
      isMenuReady: true
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
    return(
      <div className="page-container">
        <ThreeBackground />
        <SimpleHeader isMenuOpen  = {this.state.isMenuOpen}
                      isTransition  = {!this.state.isMenuReady}
                      toggleMenu  = {this.toggleMenu}
        />
        <NavMenu  visible       = {this.state.isMenuOpen}
                  doOpen        = {this.state.doMenuOpen}
                  doClose       = {this.state.doMenuClose}
                  isTransition  = {!this.state.isMenuReady}
        />

        <div className="landing">
          <div className="landing__icons">
            <a href="https://www.linkedin.com/in/clarence-adrian" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
            <a href="https://codepen.io/ad2969/" target="_blank" rel="noopener noreferrer"><CodepenIcon /></a>
            <a href="https://twitter.com/ad2969" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
          </div>
          <div className="landing__name">Clarence Adrian</div>
          <div className="landing__title">
            <div className="landing__title__svg a"><TitleOne/></div>
            <div className="landing__title__svg b"><TitleTwo/></div>
            <div className="landing__title__svg c"><TitleThree/></div>
          </div>
          <p className="landing__desc">
            Currently located in Vancouver, BC, and actively looking for Co-Op and Intern opportunities
            as a <span className="t--green">Full-Stack Developer / Software Engineer</span>
          </p>
        </div>
      </div>
    );
  }
}

export default LandingPage
