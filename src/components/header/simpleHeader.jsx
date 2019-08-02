import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../icons/logo';
import MenuButton from '../icons/menuButton';

class SimpleHeader extends React.Component {
  render() {
    return (
      <div class="header">
        <Link to="/landing"><div class="header_logo"><Logo /></div></Link>
        <div class="header_menu"><MenuButton /></div>
      </div>
    );
  }
}

export default SimpleHeader
