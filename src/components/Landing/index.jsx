import React from 'react';
import { withRouter } from "react-router";

import SimpleHeader from 'components/header/simpleHeader';
import NavMenu from 'components/navmenu/navMenu';

import WhiteBackground from 'assets/media/white.jpg'
import ThreeBackground from './threeBackground';
// import ThreeExample from './threeExample';
import FullStackDeveloper from './titleFullstack';
import ResumeButton from './resumeButton';

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
    const isFrontend = this.state.isFrontend;
    const {color1, color2, bcolor} = menuColor(this.props.menuColorFocus);
    return(
      <div className = "page-container">
        <ThreeBackground show = {isFrontend}/>
        <img className = "background-image" alt = "white" src = {WhiteBackground}
             style = {{display: isFrontend | this.props.isMenuOpen ? "none" : "block"}} />
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
                  resetFocus    = {this.props.resetMenuFocus}
        />

        <div className ="landing">
          <div className = "landing__name--intro">Hello, I am</div>
          <div className = "landing__name">Clarence Adrian</div>
          <div className = "landing__title">
            <div className = "landing__title__svg a"><FullStackDeveloper color1 = {color1} color2 = {color2}/></div>
          </div>
          <div className = "landing__desc landing__icons">
            <ResumeButton color1 = {color1} color2 = {color2}/>
          </div>
        </div>
        {/*<div class="mouse">
          <div class="scroll"></div>
        </div>*/}
        <div className = "b--bottom-right">
          <span style = {{paddingLeft: "1.5rem"}}>LQ</span>
          <label className = "switch">
            <input type = "checkbox" checked = {isFrontend} onChange = {this.changeFrontend}></input>
            <span className = "slider round"></span>
          </label>
          <span style = {{paddingRight: "1.5rem"}}>HQ</span>
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage)
