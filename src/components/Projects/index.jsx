import React from 'react';

import SimpleHeader from '../header/simpleHeader';
import NavMenu from '../navmenu/navMenu';

import menuColor from '../../functions/menuColor';

class ProjectsPage extends React.Component {
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
      document.title = "<AD2969 /> My Projects";
  }

  render() {
    var {color1, color2, bcolor} = menuColor(this.state.menuColorFocus);

    return(
      <div className="page-container">
        <SimpleHeader isMenuOpen  = {this.state.isMenuOpen}
                      isTransition  = {!this.state.isMenuReady}
                      toggleMenu  = {this.toggleMenu}
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

        <div className="projects">
        </div>
      </div>
    );
  }
}

export default ProjectsPage
