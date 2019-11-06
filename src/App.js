import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './styles/App.scss';

import LandingPage from './components/Landing/index';
import AboutMePage from './components/AboutMe/index';
import ProjectsPage from './components/Projects/index';
import ProjectsGrid from './components/Projects/projectsGrid';

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
      carouselFocus: 3,
    };
  }

  toggleMenu = () => {
    console.log("toggle menu");
    if(this.state.isMenuReady === false) return;
    this.setState(prevState => ({
       doMenuOpen: prevState.isMenuOpen ? false : true,
       doMenuClose: prevState.isMenuOpen ? true : false,
       isMenuOpen: !prevState.isMenuOpen,
       isMenuReady: false,
     }));
    setTimeout(() => {this.setState({isMenuReady: true})}, 3300);
  }

  setMenuFocus = (event) => {
    this.setState({ menuColorFocus: event.currentTarget.dataset.focusid });
  }

  resetMenuFocus = (menuId) => {
    this.setState({ menuColorFocus: menuId });
  }

  setCarouselFocus = (carouselId) => {
    this.setState({ carouselFocus: carouselId })
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
               render = {() => <Redirect to = {ROUTES.LANDING} /> }
        />
        <Route exact path = {ROUTES.LANDING}
               render = {() =>
                 <LandingPage  menuId         = "0"
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
                 <AboutMePage  menuId         = "1"
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
        <Route exact path = {ROUTES.PROJECTS}
               render = {() =>
                 <ProjectsPage  menuId         = "2"
                                isMenuOpen     = {this.state.isMenuOpen}
                                doMenuOpen     = {this.state.doMenuOpen}
                                doMenuClose    = {this.state.doMenuClose}
                                isMenuReady    = {this.state.isMenuReady}
                                menuColorFocus = {this.state.menuColorFocus}


                                toggleMenu     = {this.toggleMenu}
                                setMenuFocus   = {this.setMenuFocus}
                                resetMenuFocus = {this.resetMenuFocus}

                                carouselFocus     = {this.state.carouselFocus}
                                setCarouselFocus  = {this.setCarouselFocus}
                 />
               }
        />

        <Route exact path = {ROUTES.PROJECTSID} component={ProjectsGrid} />

      </Router>
    );
  }
}

export default App;
