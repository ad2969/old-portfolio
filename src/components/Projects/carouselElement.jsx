import React from 'react';
import { Link } from 'react-router-dom'

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

    const entryDisplay = this.props.lock ? {display: "none"} : {};
    return(
      <div className="carousel-element">
        <div className="carousel-entry" style={entryDisplay}>

          <Link onMouseOver={this.scaleImage}
                onMouseOut={this.scaleImageDown}
                to={this.props.link}>
                {this.props.data.title}
          </Link>

          <img src={require(`${this.props.data.imgLink}`)}
               alt="main"
               style={imgDisplay}>
          </img>

        </div>
      </div>
    );
  }
}

export default CarouselElement
