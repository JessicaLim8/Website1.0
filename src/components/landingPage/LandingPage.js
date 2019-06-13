import React from 'react';
import Typed from 'react-typed';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faFile } from '@fortawesome/free-solid-svg-icons';
import MediaIcon from './MediaIcon';
import '../../main.css';
import Headshot from './headshot.jpg';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="mainInfo">
          <img src={Headshot} id="headshot" alt="Headshot"/>
          <div className="textBox">
            <h1 id="heading">
              <Typed
                startDelay={500}
                strings={["Hi I'm Jessica Lim"]}
                typeSpeed={60}
              />
            </h1>
            <p className="blurb">
              As a Biomedical engineering student, I love tackling challenges with a design oriented approach. I have a passion technology, I want to work towards finding the innovative and disruptive solutions to tomorrow's problems!
            </p>
          </div>
        </div>
        <div className="iconBar">
          <MediaIcon icon={faGithubSquare} href="https://github.com/JessicaLim8"/>
          <MediaIcon icon={faLinkedin} href="https://linkedin.com/in/jlim/"/>
          <MediaIcon icon={faEnvelopeSquare} href="mailto:jessicalim@bell.net"/>
          <MediaIcon icon={faFile} href="https://drive.google.com/file/d/14VYi7c_xeyt7f2VOVlv3YOfXHYQt5ocl/view?usp=sharing"/>
        </div>
      </div>
    );
  }
}

export default LandingPage;
