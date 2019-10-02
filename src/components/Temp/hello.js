import React from 'react';
import { withRouter } from "react-router";

class Hello extends React.Component {

  render() {
    return(
      <div style={{position: "absolute", width: "100%", top: "-30px"}}>
        <iframe type="text/html" src="https://darksky.net/widget/graph-bar/42.360082,-71.05888/us12/en.js?width=undefined&title=Full Forecast&textColor=333333&bgColor=FFFFFF&skyColor=undefined&fontFamily=Default&customFont=&units=us&timeColor=333333&tempColor=C7C7C7&currentDetailsOption=true" width="100%" height="350" frameborder="0" scrolling="no"></iframe>
        <div style={{position: "absolute", width: "100%", height: "100%"}}>
        </div>
      </div>
    );
  }
}

export default withRouter(Hello)
