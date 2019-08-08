import React from 'react';
import { Link } from 'react-router-dom';

import * as ID from '../../constants/routes';

import crypto from '../../assets/project-files/cryptoBlockchainProjects';
import eng from '../../assets/project-files/engineeringProjects';
import hax from '../../assets/project-files/ethicalHackProjects';
import mlai from '../../assets/project-files/machineAiProjects';
import mobileWeb from '../../assets/project-files/mobileWebProjects';

class CarouselGrid extends React.Component {

  constructor(props) {
    super(props);

    const { id } = this.props.match.params;
    switch(id) {
      case ID.PROJECTS_E:
        this.state = { data: eng.data } ;
        break;
      case ID.PROJECTS_C:
        this.state = { data: crypto.data } ;
        break;
      case ID.PROJECTS_A:
        this.state = { data: mobileWeb.data } ;
        break;
      case ID.PROJECTS_H:
        this.state = { data: hax.data } ;
        break;
      case ID.PROJECTS_M:
        this.state = { data: mlai.data } ;
        break;
      default: break;
    };
  }

  render() {
    return(
      <div className="page-container">
      <div className="project-grid-container">
        <div className="project-grid">
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
          <div className="project-grid__element"></div>
        </div>
        <div className="project-grid__exit">
          <Link to="/projects">Back</Link>
        </div>
      </div>
      </div>
    );
  }
}

export default CarouselGrid
