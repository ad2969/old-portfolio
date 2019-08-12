import React from 'react';

class AboutTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    if(this.props.currentPage === 2 && !this.state.loaded ) {
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
    if(this.props.currentPage === 2 && !this.state.loaded ) {
      this.setState({ loaded: true });

      const covers = document.getElementsByClassName('about__cover2');
      const texts = document.getElementsByClassName('about__text2');

      for( let i = 0; i < covers.length; i++ ) {
        covers[i].style.backgroundColor = this.props.randomColor();
        setTimeout( () => {
          covers[i].classList.toggle('active');
          texts[i].classList.toggle('active');
        }, i * 50 + 500);
      }
    }
  }

  render() {
    return(
      <div className="section about-2">
        <div className="section-div">
          <ul>

          <li className="section2--about"><div>
            <div className="about__line">
            <div className="about__cover about__cover2"></div>
            <span className="about__text about__text2">I am currently looking for</span>
            </div>
            </div>
            <div>
            <div className="about__line">
            <div className="about__cover about__cover2"></div>
            <span className="about__text about__text2">Co-Op and internship opportunities</span>
            </div>
            </div>
            <div>
            <div className="about__line">
            <div className="about__cover about__cover2"></div>
            <span className="about__text about__text2">as a <span className="about__text--colored">full-stack developer</span></span>
            </div>
          </div></li>

          <li><div>
            <div className="about__line">
            <div className="about__cover about__cover2"></div>
            <span className="about__text about__text2">If you know someone <span className="about__text--colored">currently hiring,</span></span>
            </div>
            </div>
            <div>
            <div className="about__line">
            <div className="about__cover about__cover2"></div>
            <span className="about__text about__text2">want to <span className="about__text--colored">start a project with me,</span></span>
            </div>
            </div>
            <div>
            <div className="about__line">
            <div className="about__cover about__cover2"></div>
            <span className="about__text about__text2">or simply want to <span className="about__text--colored">chat over some coffee,</span></span>
            </div>
            <div>
            <div className="about__line">
            <div className="about__cover about__cover2"></div>
            <span className="about__text about__text2">I would be delighted to get in touch!</span>
            </div>
            </div>
          </div></li>

          </ul>
        </div>
      </div>
    );
  }
}

export default AboutTwo
