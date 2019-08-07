import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../icons/logo';
import MenuButton from '../icons/menuButton';

import * as COLORS from '../../constants/colors';

import { circleClick } from '../../functions/anims';

class SimpleHeader extends React.Component {


  render() {
    var menuActive = (this.props.isMenuOpen) ? "header__navbutton header__navbutton--active" : "header__navbutton";
    var logoVisibility = (this.props.isTransition) ? {opacity: 0} : {opacity: 1};
    var headerClass = "header";
    if(typeof this.props.color !== 'undefined') {
      switch(this.props.color) {
        case COLORS.DARK:
          headerClass = "header header--dark";
          break;
        case COLORS.DARK2:
          headerClass = "header header--dark2";
          break;
        case COLORS.WHITE:
          headerClass = "header header--white";
          break;
        case COLORS.BLACK:
          headerClass = "header header--black";
          break;
        default: break;
      }
    }

    return (
      <div className={headerClass}>
        <Link to="/landing">
          <div className="header__logo" style={logoVisibility}>
            <div onClick={circleClick} className="circleclick--effect">
              <Logo color1={this.props.colorpalette.color1} color2={this.props.colorpalette.color2}/>
            </div>
          </div>
        </Link>
        <div onClick={this.props.toggleMenu} id="navbutton" className={menuActive}>
          <MenuButton color1={this.props.colorpalette.color1}
                      color2={this.props.colorpalette.color2}
                      color3={this.props.backgroundColor}
          />
        </div>
      </div>
    );
  }
}

export default SimpleHeader
