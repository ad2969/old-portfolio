import React from 'react';

import SimpleHeader from '../header/simpleHeader';

import ThreeBackground from './threeBackground';
// import ThreeExample from './threeExample';

import TitleOne from './title1';
import TitleTwo from './title2';
import TitleThree from './title3';
import LinkedInIcon from '../icons/linkedIn';
import CodepenIcon from '../icons/codepen';
import TwitterIcon from '../icons/twitter';

class LandingPage extends React.Component {
  componentDidMount() {
      document.title = "<AD2969 /> Landing Page";
  }

  render() {
    return(
      <div>
        <ThreeBackground />

        <SimpleHeader />

        <div class="landing--container landing--bound">
          <div class="landing--icons">
            <a href="https://www.linkedin.com/in/clarence-adrian" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
            <a href="https://codepen.io/ad2969/" target="_blank" rel="noopener noreferrer"><CodepenIcon /></a>
            <a href="https://twitter.com/ad2969" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
          </div>
          <div class="landing--name">Clarence Adrian</div>
          <div class="landing--title">
            <div class="landing--title-svg a"><TitleOne/></div>
            <div class="landing--title-svg b"><TitleTwo/></div>
            <div class="landing--title-svg c"><TitleThree/></div>
          </div>
          <p class="landing--desc">
            Currently located in Vancouver, BC, and actively looking for Co-Op and Intern opportunities
            as a <span class="colortext_green">Full-Stack Developer / Software Engineer</span>
          </p>
        </div>
      </div>
    );
  }
}

export default LandingPage
