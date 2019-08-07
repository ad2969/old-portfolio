import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from "react-router";

import './styles/App.scss';

import LandingPage from './components/Landing/index';
import AboutMePage from './components/AboutMe/index';
import ProjectsPage from './components/Projects/index';

import * as ROUTES from './constants/routes';
import './serviceWorker';

class App extends React.Component {
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
       isMenuReady: false,
       menuColorFocus: 0
     }));
    setTimeout(() => {this.setState({isMenuReady: true})}, 3300);
  }

  setMenuFocus = (event) => {
    this.setState({ menuColorFocus: event.currentTarget.dataset.focusid });
  }

  resetMenuFocus = (event) => {
    this.setState({ menuColorFocus: 0 });
  }

  componentDidUpdate() {
    if(this.state.doMenuOpen | this.state.doMenuClose) {
      this.setState(prevState => ({
        doMenuOpen: false,
        doMenuClose: false,
      }));
    }
  }

  render() {
    return(
      <Router>

        <Route exact path = {ROUTES.HOME}
               render = {() =>
                 <LandingPage  doRedirect     = {this.state.doRedirect}
                               prevLocation   = {this.state.currentLocation}
                               redirect       = {this.redirect}

                               isMenuOpen     = {this.state.isMenuOpen}
                               doMenuOpen     = {this.state.doMenuOpen}
                               doMenuClose    = {this.state.doMenuClose}
                               isMenuReady    = {this.state.isMenuReady}
                               menuColorFocus = {this.state.menuColorFocus}

                               toggleMenu     = {this.toggleMenu}
                               setMenuFocus   = {this.setMenuFocus}
                               resetMenuFocus = {this.resetMenuFocus}
                 />
               }
        />
        <Route exact path = {ROUTES.LANDING}
               render = {() =>
                 <LandingPage  doRedirect     = {this.state.doRedirect}
                               prevLocation   = {this.state.currentLocation}
                               redirect       = {this.redirect}

                               isMenuOpen     = {this.state.isMenuOpen}
                               doMenuOpen     = {this.state.doMenuOpen}
                               doMenuClose    = {this.state.doMenuClose}
                               isMenuReady    = {this.state.isMenuReady}
                               menuColorFocus = {this.state.menuColorFocus}

                               toggleMenu     = {this.toggleMenu}
                               setMenuFocus   = {this.setMenuFocus}
                               resetMenuFocus = {this.resetMenuFocus}
                 />
               }
        />
        <Route exact path = {ROUTES.ABOUT_ME}
               render = {() =>
                 <AboutMePage  doRedirect     = {this.state.doRedirect}
                               prevLocation   = {this.state.currentLocation}
                               redirect       = {this.redirect}

                               isMenuOpen     = {this.state.isMenuOpen}
                               doMenuOpen     = {this.state.doMenuOpen}
                               doMenuClose    = {this.state.doMenuClose}
                               isMenuReady    = {this.state.isMenuReady}
                               menuColorFocus = {this.state.menuColorFocus}

                               toggleMenu     = {this.toggleMenu}
                               setMenuFocus   = {this.setMenuFocus}
                               resetMenuFocus = {this.resetMenuFocus}
                 />
               }
        />
        <Route exact path={ROUTES.PROJECTS} component={ProjectsPage} />

      </Router>
    );
  }
}

export default App;
