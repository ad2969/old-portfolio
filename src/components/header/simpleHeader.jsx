import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../icons/logo';
import MenuButton from '../icons/menuButton';

import { circleClick } from '../../functions/anims';

class SimpleHeader extends React.Component {

  render() {
    return (
      <div className="header">
        <Link to="/landing">
        <div onClick={circleClick} id="header__logo" className="header__logo circleclick--effect"><Logo /></div>
        </Link>
        <div className="header__navbutton"><MenuButton /></div>
      </div>
    );
  }
}

export default SimpleHeader
