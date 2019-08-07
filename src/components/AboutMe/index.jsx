import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

import SimpleHeader from '../header/simpleHeader';
import NavMenu from '../navmenu/navMenu';

import * as COLORS from '../../constants/colors';

class AboutMePage extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      doMenuOpen: false,
      doMenuClose: false,
      isMenuReady: true,

      isScrolling: false,
      scrollPosition: 0,
    };
  }

  toggleMenu = () => {
    if(this.state.isMenuReady === false) return;
    this.setState(prevState => ({
       doMenuOpen: prevState.isMenuOpen ? false : true,
       doMenuClose: prevState.isMenuOpen ? true : false,
       isMenuOpen: !prevState.isMenuOpen,
       isMenuReady: false,
     }));
    setTimeout(() => {this.setState(prevState => ({
      isMenuReady: true,
    }))}, 3300);
  }

  componentDidUpdate() {
    if(this.state.doMenuOpen | this.state.doMenuClose) {
      this.setState(prevState => ({
        doMenuOpen: false,
        doMenuClose: false,
      }));
    }
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

  componentDidMount() {
    document.title = "<AD2969 /> About Me";
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return(
      <div className="page-container page-container--about">
        <SimpleHeader isMenuOpen      = {this.state.isMenuOpen}
                      isTransition    = {!this.state.isMenuReady}
                      toggleMenu      = {this.toggleMenu}
                      colorpalette    = {COLORS.OCEANPALETTE}
                      backgroundColor = {COLORS.OCEANPALETTE.dark}
        />
        <NavMenu  visible       = {this.state.isMenuOpen}
                  doOpen        = {this.state.doMenuOpen}
                  doClose       = {this.state.doMenuClose}
                  isTransition  = {!this.state.isMenuReady}
        />

        <ReactFullpage
          scrollOverflow={true}
          sectionsColor={[ COLORS.CRYPTOPALETTE.medium,
                           COLORS.CRYPTOPALETTE.color1,
                           COLORS.CRYPTOPALETTE.color2,
                           COLORS.CRYPTOPALETTE.medium,
                           COLORS.CRYPTOPALETTE.medium,
                           COLORS.CRYPTOPALETTE.medium ]}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section about-1">
                  <div className="section-div">
                    <h1>I am a Section</h1>
                  </div>
                </div>
                <div className="section about-2">
                  <div className="section-div">
                    <h1>I am a Section</h1>
                  </div>
                </div>
                <div className="section about-3">
                  <div className="section-div">
                    <h1>I am a Section</h1>
                  </div>
                </div>
                <div className="section about-4">
                  <div className="section-div">
                    <h1>I am a Section</h1>
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

export default AboutMePage
