import React from 'react';

import SimpleHeader from '../header/simpleHeader';
import NavMenu from '../navmenu/navMenu';

class ProjectsPage extends React.Component {
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
      document.title = "<AD2969 /> My Projects";
  }

  render() {
    return(
      <div className="page-container">
        <SimpleHeader isMenuOpen  = {this.state.isMenuOpen}
                      isTransition  = {!this.state.isMenuReady}
                      toggleMenu  = {this.toggleMenu}
        />
        <NavMenu  visible       = {this.state.isMenuOpen}
                  doOpen        = {this.state.doMenuOpen}
                  doClose       = {this.state.doMenuClose}
                  isTransition  = {!this.state.isMenuReady}
        />

        <div className="projects">
        </div>
      </div>
    );
  }
}

export default ProjectsPage
