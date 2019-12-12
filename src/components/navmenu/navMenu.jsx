import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import softwareResume from 'assets/generic-software.pdf'

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: this.props.visible,
    }
  }

  openMenu = () => {
    // console.log("OPEN MENU!");
    setTimeout(() => { this.setState({ isMenuVisible : true }) }, 1100);
    this.transitionMenu();
  }

  closeMenu = () => {
    // console.log("CLOSE MENU!");
    setTimeout(() => { this.setState({ isMenuVisible : false }) }, 1100);
    this.transitionMenu();
  }

  transitionMenu = () => {
    setTimeout(() => {  document.getElementById('nmtb1').classList.add('active', 'o--visible');
                        document.getElementById('nmtb1').classList.remove('o--hidden') }, 0);
    setTimeout(() => {  document.getElementById('nmtb2').classList.add('active', 'o--visible');
                        document.getElementById('nmtb2').classList.remove('o--hidden') }, 50);
    setTimeout(() => {  document.getElementById('nmtb3').classList.add('active', 'o--visible');
                        document.getElementById('nmtb3').classList.remove('o--hidden') }, 100);

    setTimeout(() => {  document.getElementById('loader').classList.toggle('active') }, 100);
    setTimeout(() => {  document.getElementById('nmtb1').classList.remove('active') }, 2900);
    setTimeout(() => {  document.getElementById('nmtb2').classList.remove('active') }, 2950);
    setTimeout(() => {  document.getElementById('nmtb3').classList.remove('active') }, 3000);

    setTimeout(() => {  document.getElementById('loader').classList.toggle('active') }, 2700);

    setTimeout(() => {  document.getElementById('nmtb1').classList.add('o--hidden');
                        document.getElementById('nmtb2').classList.add('o--hidden');
                        document.getElementById('nmtb3').classList.add('o--hidden');
                        document.getElementById('nmtb1').classList.remove('o--visible');
                        document.getElementById('nmtb2').classList.remove('o--visible');
                        document.getElementById('nmtb3').classList.remove('o--visible') }, 3300);
    }

  componentDidUpdate() {
    if(this.props.doOpen) this.openMenu();
    else if(this.props.doClose) this.closeMenu();
  }

  render() {
    const containerstyle = this.props.isTransition ? {visibility: "visible"} : {visibility: "hidden"};
    const menuStyle = this.state.isMenuVisible ? {visibility: "visible"} : {visibility: "hidden"};
    const hidden = {display: "none"};

    return(
      <div className="navmenu-container">
        <div className="navmenu" id="navmenu" style={menuStyle}>
          <nav className="menu-container">
            <Link data-focusid="0" className="menu-item" to="/landing">
              <span className="menu-item__indication"
                    style={this.props.location.pathname === "/landing" ? {} : hidden}>>&nbsp;</span>
              <span className="menu-item-2">
                <span className="menu-item__name menu-item__name-1">HOME</span>
                <span className="menu-item__label">Explore my homepage</span>
              </span>
            </Link>
            <Link data-focusid="1" className="menu-item" to="/about">
              <span className="menu-item__indication"
                    style={this.props.location.pathname === "/about" ? {} : hidden}>>&nbsp;</span>
              <span className="menu-item-2">
                <span className="menu-item__name menu-item__name-2">ABOUT ME</span>
                <span className="menu-item__label">Find out about who runs this website</span>
              </span>
            </Link>
            <Link data-focusid="2" className="menu-item" to="/projects">
              <span className="menu-item__indication"
                    style={this.props.location.pathname === "/projects" ? {} : hidden}>>&nbsp;</span>
              <span className="menu-item-2">
                <span className="menu-item__name menu-item__name-3">PROJECTS</span>
                <span className="menu-item__label">Learn about what I do</span>
              </span>
            </Link>
            <a href={softwareResume} target="_blank" rel="noopener noreferrer"
               data-focusid="3" className="menu-item">
              <span className="menu-item__indication"
                    style={hidden}>>&nbsp;</span>
              <span className="menu-item-2">
                <span className="menu-item__name menu-item__name-4">RESUME</span>
                <span className="menu-item__label">Hiring? I'm open to opportunities!</span>
              </span>
            </a>
          </nav>
        </div>

        <div className="navmenu__transition-box" style={containerstyle}>
          <div className="nmtb nmtb1 o--hidden" id="nmtb1"></div>
          <div className="nmtb nmtb2 o--hidden" id="nmtb2"></div>
          <div className="nmtb nmtb3 o--hidden" id="nmtb3"></div>
          <div className="loader" id="loader">
            <span className="loader__circle"></span>
            <span className="loader__square"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NavMenu)
