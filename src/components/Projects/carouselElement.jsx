import React from 'react';

import CarouselGrid from './carouselGrid';

class CarouselElement extends React.Component {
  constructor() {
    super();
    this.state = {
      imgZoom: false
    }
  }

  scaleImage = () => {
    this.setState({ imgZoom: true });
  }
  scaleImageDown = () => {
    this.setState({ imgZoom: false });
  }

  render() {

    const imgDisplay = this.state.imgZoom ? {transform: "scale(1.1)"} : {}

    const gridDisplay = this.props.lock ? {} : {display: "none"};
    const entryDisplay = this.props.lock ? {display: "none"} : {};
    return(
      <div className="carousel-element">
        <div className="carousel-entry" style={entryDisplay}>

          <div onMouseOver={this.scaleImage}
               onMouseOut={this.scaleImageDown}>
               {this.props.data.title}
          </div>

          <img src={require(`${this.props.data.imgLink}`)}
               alt="main"
               style={imgDisplay}>
          </img>

        </div>
        <CarouselGrid style={gridDisplay}/>
      </div>
    );
  }
}

export default CarouselElement
