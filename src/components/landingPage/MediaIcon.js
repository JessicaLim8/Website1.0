import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MediaIcon extends React.Component {
  render() {
    return (
      <FontAwesomeIcon icon={this.props.icon} />
    );
  }
}

export default MediaIcon;
