import React from 'react';

class NavMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }

}
  render() {
    var menuStyle, transitionStyle;
    transitionStyle = {
      transform: "translateY(100%)"
    }
    if(this.state.visible == false) {
      menuStyle = {
        "visibility": "hidden",
        "top" : 0,
      }
    }
    return(
      <div>
        <div className="navmenu" style={menuStyle}>
        </div>
        <div className="navmenu__transition-box nmtb1"></div>
        <div className="navmenu__transition-box nmtb2"></div>
        <div className="navmenu__transition-box nmtb3"></div>
      </div>
    )
  }
}

export default NavMenu
