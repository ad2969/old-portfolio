import React from 'react';

class TwitterIcon extends React.Component {
  render() {
    return(
      <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <mask id="twittermask" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="75">
      <rect width="75" height="75" fill="url(#twitterpattern)"/>
      </mask>
      <g mask="url(#twittermask)">
      <rect width="75" height="75" fill="url(#twitter_paint)"/>
      </g>
      <defs>
      <pattern id="twitterpattern" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#twitter" transform="scale(0.00195312)"/>
      </pattern>
      <linearGradient id="twitter_paint" x1="0" y1="37.4999" x2="75" y2="37.4999" gradientUnits="userSpaceOnUse">
      <stop offset="0.0246423" stopColor={this.props.color2}/>
      <stop offset="1" stopColor={this.props.color1}/>
      </linearGradient>
      <image id="twitter" width="512" height="512" xlinkHref="data:image/png;base64,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"/>
      </defs>
      </svg>
    );
  }
}

export default TwitterIcon
