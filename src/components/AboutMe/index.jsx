import React from 'react';
import { withRouter } from "react-router";

import ReactPageScroller from './reactPageScroller';

import SimpleHeader from 'components/header/simpleHeader';
import NavMenu from 'components/navmenu/navMenu';

import AboutOne from './firstComponent';
import AboutTwo from './secondComponent';

import menuColor from 'functions/menuColor';

const colorArray = [
  '#7f00ff',
  '#ff00ff',
  '#0000ff',
  '#007fff',
  '#00ffff'
];

class AboutMePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
    this._pageScroller = null;
  }

  randomColor = () => {
    return colorArray[Math.floor(Math.random()*colorArray.length)];
  }

  goToPage = (eventKey) => {
      this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = (number) => {
      this.setState({currentPage: number});
  };

  componentDidMount() {
    document.title = "<AD2969 /> About Me";
    this.props.resetMenuFocus(this.props.menuId);
  }

  componentWillUnmount() {
    if (this.props.location !== this.props.prevLocation && this.props.isMenuOpen)
      this.props.toggleMenu();
  }

  render() {
    const {color1, color2, bcolor} = menuColor(this.props.menuColorFocus);

    return(
      <div className="page-container page-container--about">
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

        <React.Fragment>
          <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                <AboutOne colorArray  = {colorArray}
                          isMenuOpen  = {this.props.isMenuOpen}
                          randomColor = {this.randomColor}
                          currentPage = {this.state.currentPage}
                />
                <AboutTwo colorArray  = {colorArray}
                          isMenuOpen  = {this.props.isMenuOpen}
                          randomColor = {this.randomColor}
                          currentPage = {this.state.currentPage}
                />

                <div className="section about-3">
                  <div className="section-div" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <h1>THIS WEB IS STILL A WORK-IN-PROGRESS</h1>
                    <h1>See an older version <a href="https://2019-ad2969.netlify.com">here</a></h1>
                  </div>
                </div>
                <div className="section about-4">
                  <div className="section-div" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <h1>THIS WEB IS STILL A WORK-IN-PROGRESS</h1>
                    <h1>See an older version <a href="https://2019-ad2969.netlify.com">here</a></h1>
                  </div>
                </div>
            </ReactPageScroller>
          </React.Fragment>
      </div>
    );
  }
}

export default withRouter(AboutMePage)
