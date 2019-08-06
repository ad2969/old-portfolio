import React from 'react';

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
    }
  }

  openMenu = () => {
    console.log("OPEN MENU!");
    setTimeout(() => { this.setState({ isMenuVisible : true }) }, 1100);
    this.transitionMenu();
  }

  closeMenu = () => {
    console.log("CLOSE MENU!");
    setTimeout(() => { this.setState({ isMenuVisible : false }) }, 1100);
    this.transitionMenu();
  }

  transitionMenu = () => {
    setTimeout(() => {  document.getElementById('nmtb1').classList.add('active', 'o--visible');
                        document.getElementById('nmtb1').classList.remove('o--hidden') }, 0);
    setTimeout(() => {  document.getElementById('nmtb2').classList.add('active', 'o--visible');
                        document.getElementById('nmtb2').classList.remove('o--hidden') }, 50);
    setTimeout(() => {  document.getElementById('nmtb3').classList.add('active', 'o--visible');
                        document.getElementById('nmtb3').classList.remove('o--hidden') }, 100);

    setTimeout(() => {  document.getElementById('loader').classList.toggle('active') }, 100);
    setTimeout(() => {  document.getElementById('nmtb1').classList.remove('active') }, 2900);
    setTimeout(() => {  document.getElementById('nmtb2').classList.remove('active') }, 2950);
    setTimeout(() => {  document.getElementById('nmtb3').classList.remove('active') }, 3000);

    setTimeout(() => {  document.getElementById('loader').classList.toggle('active') }, 2700);

    setTimeout(() => {  document.getElementById('nmtb1').classList.add('o--hidden');
                        document.getElementById('nmtb2').classList.add('o--hidden');
                        document.getElementById('nmtb3').classList.add('o--hidden');
                        document.getElementById('nmtb1').classList.remove('o--visible');
                        document.getElementById('nmtb2').classList.remove('o--visible');
                        document.getElementById('nmtb3').classList.remove('o--visible') }, 3300);
    }

  componentDidUpdate() {
    console.log("NavMenu Updated!", this.props);
    if(this.props.doOpen) this.openMenu();
    else if(this.props.doClose) this.closeMenu();
  }

  render() {
    var containerstyle = this.props.isTransition ? {visibility: "visible"} : {visibility: "hidden"};
    var menuStyle = this.state.isMenuVisible ? {visibility: "visible"} : {visibility: "hidden"};

    return(
      <div className="navmenu-container">
        <div className="navmenu" id="navmenu" style={menuStyle}>
        </div>
        <div className="navmenu__transition-box" style={containerstyle}>
          <div className="nmtb nmtb1 o--hidden" id="nmtb1"></div>
          <div className="nmtb nmtb2 o--hidden" id="nmtb2"></div>
          <div className="nmtb nmtb3 o--hidden" id="nmtb3"></div>
          <div className="loader" id="loader">
            <span className="loader__circle"></span>
            <span className="loader__square"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default NavMenu
