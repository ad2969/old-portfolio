import React from 'react';
import { Link } from 'react-router-dom';

import * as ID from '../../constants/routes';

import crypto from '../../assets/project-files/cryptoBlockchainProjects';
import eng from '../../assets/project-files/engineeringProjects';
import hax from '../../assets/project-files/ethicalHackProjects';
import mlai from '../../assets/project-files/machineAiProjects';
import mobileWeb from '../../assets/project-files/mobileWebProjects';

class CarouselGrid extends React.Component {

  constructor(props) {
    super(props);

    const { id } = this.props.match.params;
    console.log(id);
    switch(id) {
      case ID.PROJECTS_E:
        this.state = { data: eng.data, modalOpen: false } ;
        break;
      case ID.PROJECTS_C:
        this.state = { data: crypto.data, modalOpen: false } ;
        break;
      case ID.PROJECTS_A:
        this.state = { data: mobileWeb.data, modalOpen: false } ;
        break;
      case ID.PROJECTS_H:
        this.state = { data: hax.data, modalOpen: false } ;
        break;
      case ID.PROJECTS_M:
        this.state = { data: mlai.data, modalOpen: false } ;
        break;
      default: this.state = { modalOpen: false }
        break;
    };
  }

  loadDetailedData = (event) => {

    const index = parseInt(event.currentTarget.dataset.id);
    if(this.state.data[index].active !== true) return;

    console.log(index);
    this.setState({
      detailedIndex: index,
      modalOpen: true,
    })
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
  }

  render() {
    return(
      <div className="page-container">
      <div className="project-grid-container">
        <div className="project-grid">
          <img data-id = "17" alt="icon"
               src={require(`${this.state.data[17].displaysrc}`)}
               className={this.state.data[17].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "16" alt="icon"
               src={require(`${this.state.data[16].displaysrc}`)}
               className={this.state.data[16].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "15" alt="icon"
               src={require(`${this.state.data[15].displaysrc}`)}
               className={this.state.data[15].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "15" alt="icon"
               src={require(`${this.state.data[14].displaysrc}`)}
               className={this.state.data[14].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "13" alt="icon"
               src={require(`${this.state.data[13].displaysrc}`)}
               className={this.state.data[13].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "12" alt="icon"
               src={require(`${this.state.data[12].displaysrc}`)}
               className={this.state.data[12].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "11" alt="icon"
               src={require(`${this.state.data[11].displaysrc}`)}
               className={this.state.data[11].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "10" alt="icon"
               src={require(`${this.state.data[10].displaysrc}`)}
               className={this.state.data[10].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "9" alt="icon"
               src={require(`${this.state.data[9].displaysrc}`)}
               className={this.state.data[9].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "8" alt="icon"
               src={require(`${this.state.data[8].displaysrc}`)}
               className={this.state.data[8].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "7" alt="icon"
               src={require(`${this.state.data[7].displaysrc}`)}
               className={this.state.data[7].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "6" alt="icon"
               src={require(`${this.state.data[6].displaysrc}`)}
               className={this.state.data[6].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "5" alt="icon"
               src={require(`${this.state.data[5].displaysrc}`)}
               className={this.state.data[5].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "4" alt="icon"
               src={require(`${this.state.data[4].displaysrc}`)}
               className={this.state.data[4].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "3" alt="icon"
               src={require(`${this.state.data[3].displaysrc}`)}
               className={this.state.data[3].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "2" alt="icon"
               src={require(`${this.state.data[2].displaysrc}`)}
               className={this.state.data[2].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "1" alt="icon"
               src={require(`${this.state.data[1].displaysrc}`)}
               className={this.state.data[1].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
          <img data-id = "0" alt="icon"
               src={require(`${this.state.data[0].displaysrc}`)}
               className={this.state.data[0].active ? "project-grid__element--active" : "project-grid__element"}
               onClick={this.loadDetailedData} />
        </div>
        <div className="project-grid__exit">
          <Link to="/projects">Back</Link>
        </div>
      </div>
      </div>
    );
  }
}

export default CarouselGrid
