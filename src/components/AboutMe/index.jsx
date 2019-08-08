import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import { withRouter } from "react-router";

import SimpleHeader from '../header/simpleHeader';
import NavMenu from '../navmenu/navMenu';

import COLORS from '../../styles/base/_variables.scss';
import menuColor from '../../functions/menuColor';

class AboutMePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolling: false,
      scrollPosition: 0,
    };
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
    this.props.resetMenuFocus(this.props.menuId);
  }

  componentWillUnmount() {
    if (this.props.location !== this.props.prevLocation && this.props.isMenuOpen)
      this.props.toggleMenu();
  }

  render() {
    var {color1, color2, bcolor} = menuColor(this.props.menuColorFocus);

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

export default withRouter(AboutMePage)
