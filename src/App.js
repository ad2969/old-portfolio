import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/App.css';
import './styles/class.css';

import LandingPage from './components/Landing/index';
import AboutMePage from './components/AboutMe';
import ProjectsPage from './components/Projects';

import * as ROUTES from './constants/routes';
import './serviceWorker';

function App() {
  return(
    <Router>

      <Route exact path={ROUTES.HOME} component={LandingPage} />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.ABOUT_ME} component={AboutMePage} />
      <Route exact path={ROUTES.PROJECTS} component={ProjectsPage} />

    </Router>
  );
}

export default App;
