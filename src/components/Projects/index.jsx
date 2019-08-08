import React from 'react';
import { withRouter } from "react-router";

import SimpleHeader from '../header/simpleHeader';
import NavMenu from '../navmenu/navMenu';

import CarouselGrid from './carouselGrid';

import menuColor from '../../functions/menuColor';
import variables from '../../styles/base/_variables.scss';

class ProjectsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      projectCategories: 5,
      carouselFocus: 3,
      allowScroll: true,
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
    const displayNavigation = this.state.allowScroll ? {} : {display: "none"};

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
          <div className="carousel__button-left" style={displayNavigation}
               onClick={this.focusPrev}> &lt; </div>
          <div className="carousel__button-right" style={displayNavigation}
               onClick={this.focusNext}> &gt; </div>
          <div className="carousel__scene">
            <div className="carousel" style={carouselStyle}>
              <CarouselGrid />
              <CarouselGrid />
              <CarouselGrid />
              <CarouselGrid />
              <CarouselGrid />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectsPage)
