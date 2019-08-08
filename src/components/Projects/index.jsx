import React from 'react';
import { withRouter } from "react-router";

import SimpleHeader from '../header/simpleHeader';
import NavMenu from '../navmenu/navMenu';

import CarouselElement from './carouselElement';

import menuColor from '../../functions/menuColor';
import variables from '../../styles/base/_variables.scss';
import * as ID from '../../constants/routes';

import cryptoData from '../../assets/project-files/cryptoBlockchainProjects';
import engData from '../../assets/project-files/engineeringProjects';
import ethData from '../../assets/project-files/ethicalHackProjects';
import mlaiData from '../../assets/project-files/machineAiProjects';
import mobileWebData from '../../assets/project-files/mobileWebProjects';

class ProjectsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      projectCategories: 5,
      carouselFocus: 3,
    };
  }

  focusPrev = () => {
    if(this.state.carouselFocus <= 1) {
      this.setState({
        carouselFocus: this.state.projectCategories
      });
    }
    else {
      this.setState(prevState => ({
        carouselFocus: prevState.carouselFocus - 1
      }));
    }
  }

  focusNext = () => {
    if(this.state.carouselFocus >= this.state.projectCategories) {
      this.setState({
        carouselFocus: 1
      });
    }
    else {
      this.setState(prevState => ({
        carouselFocus: prevState.carouselFocus + 1
      }));
    }
  }

  navigateTo = (event) => {
    this.setState({
      carouselFocus: parseInt(event.currentTarget.dataset.navid, 10)
    });
  }

  componentDidMount() {
      document.title = "<AD2969 /> My Projects";
      this.props.resetMenuFocus(this.props.menuId);
  }

  componentWillUnmount() {
    if (this.props.location !== this.props.prevLocation && this.props.isMenuOpen)
      this.props.toggleMenu();
  }

  render() {
    const angle = 360/variables.carouselfaces * (this.state.carouselFocus - 1);
    const carouselStyle = {transform: "translateZ(-" + variables.carouseldepth + ") " +
                          "rotateY(-" + (angle) + "deg)"};

    const showNav = this.props.isMenuOpen || !this.props.isMenuReady ? {display: "none"} : {};
    var {color1, color2, bcolor} = menuColor(this.props.menuColorFocus);

    return(
      <div className="page-container">
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

        <div className="projects">
          <div className="carousel__nav"></div>
          <div className="carousel__button-left"
               onClick={this.focusPrev}> &lt; </div>
          <div className="carousel__button-right"
               onClick={this.focusNext}> &gt; </div>
          <div className="carousel__scene">
            <div className="carousel" style={carouselStyle}>

              <CarouselElement data={cryptoData} link={"/projects/" + ID.PROJECTS_C}/>
              <CarouselElement data={ethData} link={"/projects/" + ID.PROJECTS_H}/>
              <CarouselElement data={engData} link={"/projects/" + ID.PROJECTS_E}/>
              <CarouselElement data={mlaiData} link={"/projects/" + ID.PROJECTS_M}/>
              <CarouselElement data={mobileWebData} link={"/projects/" + ID.PROJECTS_A}/>
            </div>
          </div>

          <div className="projects-nav" style={showNav}>

            <span className="navtext navtext--left">Find more of my projects!</span>
            <span data-navid="1"
                  className={this.state.carouselFocus === 1 ? "navbutton navbutton--current" : "navbutton"}
                  onClick={this.navigateTo}></span>
            <span data-navid="2"
                  className={this.state.carouselFocus === 2 ? "navbutton navbutton--current" : "navbutton"}
                  onClick={this.navigateTo}></span>
            <span data-navid="3"
                  className={this.state.carouselFocus === 3 ? "navbutton navbutton--current" : "navbutton"}
                  onClick={this.navigateTo}></span>
            <span data-navid="4"
                  className={this.state.carouselFocus === 4 ? "navbutton navbutton--current" : "navbutton"}
                  onClick={this.navigateTo}></span>
            <span data-navid="5"
                  className={this.state.carouselFocus === 5 ? "navbutton navbutton--current" : "navbutton"}
                  onClick={this.navigateTo}></span>
            <span className="navtext--right">
              <a href="https://github.com/ad2969" target="_blank" rel="noopener noreferrer" className="navtext">Github</a>
              <a href="https://codepen.io/ad2969/" target="_blank" rel="noopener noreferrer" className="navtext">Codepen</a>
            </span>

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectsPage)
