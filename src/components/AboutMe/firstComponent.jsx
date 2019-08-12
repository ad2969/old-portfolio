import React from 'react';

class AboutOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    if(this.props.currentPage === 1 && !this.state.loaded ) {
      this.setState({ loaded: true });

      const covers = document.getElementsByClassName('about__cover1');
      const texts = document.getElementsByClassName('about__text1');

      const timeDelay = this.props.isMenuOpen ? 3300 : 0;

      for( let i = 0; i < covers.length; i++ ) {
        covers[i].style.backgroundColor = this.props.randomColor();
        setTimeout( () => {
          covers[i].classList.toggle('active');
          texts[i].classList.toggle('active');
        }, i * 50 + timeDelay);
      }
    }
  }

  componentDidUpdate() {
    if(this.props.currentPage === 1 && !this.state.loaded ) {
      this.setState({ loaded: true });

      const covers = document.getElementsByClassName('about__cover1');
      const texts = document.getElementsByClassName('about__text1');

      for( let i = 0; i < covers.length; i++ ) {
        covers[i].style.backgroundColor = this.props.randomColor();
        setTimeout( () => {
          covers[i].classList.toggle('active');
          texts[i].classList.toggle('active');
        }, i * 100 + 500);
      }
    }
  }

  render() {
    return(
      <div className="section about-1">
        <div className="section-div">

          <div className="about__welcome">
            <h1>Welcome to <span className="about__text--colored2">My Profile!</span></h1>
          </div>

          <ul>

          <li><div>
            <div className="about__line">
            <div className="about__cover about__cover1"></div>
            <span className="about__text about__text1">My name is Clarence Adrian,</span>
            </div>
            </div>
            <div>
            <div className="about__line">
            <div className="about__cover about__cover1"></div>
            <span className="about__text about__text1">and I am a second year student</span>
            </div>
            </div>
            <div>
            <div className="about__line">
            <div className="about__cover about__cover1"></div>
            <span className="about__text about__text1">at the University of British Columbia,</span>
            </div>
            </div>
            <div>
            <div className="about__line">
            <div className="about__cover about__cover1"></div>
            <span className="about__text about__text1">which is located in <span className="about__text--colored">Vancouver, Canada</span></span>
            </div>
          </div></li>

          <li><div>
            <div className="about__line">
            <div className="about__cover about__cover1"></div>
            <span className="about__text about__text1">Currently studying as an electrical engineer,</span>
            </div>
            </div>
            <div>
            <div className="about__line">
            <div className="about__cover about__cover1"></div>
            <span className="about__text about__text1">I am also a passionate student</span>
            </div>
            </div>
            <div>
            <div className="about__line">
            <div className="about__cover about__cover1"></div>
            <span className="about__text about__text1">of <span className="about__text--colored">web and software development</span></span>
            </div>
          </div></li>

          </ul>
        </div>
      </div>
    );
  }
}

export default AboutOne
