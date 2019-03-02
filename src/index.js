import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/landingPage/LandingPage';

class App extends React.Component {
  render() {
    return (
      <LandingPage/>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

