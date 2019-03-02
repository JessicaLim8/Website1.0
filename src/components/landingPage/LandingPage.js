import React from 'react';
import Typed from 'react-typed';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import MediaIcon from './MediaIcon';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div classname="mainInfo">
          <h1 id="heading">
            <Typed
              startDelay={500}
              strings={["Hi I'm Jessica Lim"]}
              typeSpeed={60}
            />
          </h1>
          <p classname="blurb">
            blah blah blah paragraph on how i am cool
          </p>
        </div>
        <div classname="iconBar">
          <MediaIcon icon={faGithubSquare} />
          <MediaIcon icon={faLinkedin} />
          <MediaIcon icon={faEnvelopeSquare} />
        </div>
      </div>
    );
  }
}

export default LandingPage;
