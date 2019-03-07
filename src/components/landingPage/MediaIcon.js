import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MediaIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state= {hover: false};
  }

  onMouseEnter() {
    this.setState({hover: true});
  }

  onMouseOut() {
    this.setState({hover: false});
  }

  render() {
    return (
      <FontAwesomeIcon
        icon={this.props.icon}
        id = {this.state.hover ? "hover" : "not-hover"}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseOut.bind(this)}
      />
    );
  }
}

export default MediaIcon;
