import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/landingPage/LandingPage';
import './main.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <LandingPage/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

