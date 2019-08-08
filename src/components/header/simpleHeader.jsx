import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../icons/logo';
import MenuButton from '../icons/menuButton';

import { circleClick } from '../../functions/anims';

class SimpleHeader extends React.Component {


  render() {
    const menuActive = (this.props.isMenuOpen) ? "header__navbutton header__navbutton--active" : "header__navbutton";
    const logoVisibility = (this.props.isTransition | this.props.isMenuOpen) ? {opacity: 0} : {opacity: 1};
    const disableDisplay = this.props.disable ? "header o--fadeout" : "header";

    return (
      <div className={disableDisplay}>
        <Link to="/landing">
          <div className="header__logo" style={logoVisibility}>
            <div onClick={circleClick} className="circleclick--effect">
              <Logo color1={this.props.color1} color2={this.props.color2}/>
            </div>
          </div>
        </Link>
        <div onClick={this.props.toggleMenu} id="navbutton" className={menuActive}>
          <MenuButton color1={this.props.color1}
                      color2={this.props.color2}
                      color3={this.props.backgroundColor}
          />
        </div>
      </div>
    );
  }
}

export default SimpleHeader
