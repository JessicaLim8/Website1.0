import React from 'react';
import Typed from 'react-typed';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default LandingPage;
