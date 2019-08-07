import React from 'react';

class MenuButton extends React.Component {
  render() {
    return(
      <svg version="1.1" viewBox="0 0 800 600">
      <linearGradient id="menubutton_paint" gradientUnits="userSpaceOnUse" x1="150" y1="300" x2="650" y2="300" gradientTransform="matrix(1 0 0 -1 0 600)">
      <stop offset="0" style={{stopColor: this.props.color2}}/>
      <stop offset="0.6903" style={{stopColor: this.props.color1}}/>
      <stop offset="1" style={{stopColor: this.props.color1}}/>
      </linearGradient>
      <circle cx="400" cy="300" r="300" fill="url(#menubutton_paint)"/>
      <path d="M290,210 C290,210 510,210 530,210 C730,210 630,530 510,410 C430,330 290,190 290,190"
            className="logo__path--top"></path>
      <path d="M290,310 L530,310"
            className="logo__path--middle"></path>
      <path d="M290,210 C290,210 510,210 530,210 C730,210 630,530 510,410 C430,330 290,190 290,190"
            transform="translate(470, 310) scale(1, -1) translate(-470, -310)"
            className="logo__path--bottom"></path>
      </svg>
    );
  }
}

export default MenuButton
