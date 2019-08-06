import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../icons/logo';
import MenuButton from '../icons/menuButton';

import { circleClick } from '../../functions/anims';

class SimpleHeader extends React.Component {


  render() {
    var menuActive = (this.props.isMenuOpen) ? "header__navbutton header__navbutton--active" : "header__navbutton";
    var logoVisibility = (this.props.isTransition) ? {opacity: 0} : {opacity: 1};

    return (
      <div className="header">
        <Link to="/landing">
          <div className="header__logo" style={logoVisibility}>
            <div onClick={circleClick} className="circleclick--effect"><Logo /></div>
          </div>
        </Link>
        <div onClick={this.props.toggleMenu} id="navbutton" className={menuActive}><MenuButton /></div>
      </div>
    );
  }
}

export default SimpleHeader
