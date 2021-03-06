import React from 'react';
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';
import './styles/Badge.css';

class Badge extends React.Component {
  render() {
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='Conference Logo' />
        </div>
        <div className='Badge__section-name'>
          <Gravatar
            className='Badge__avatar'
            alt='Badge Avatar'
            email={this.props.email}
          />
          <h1>
            {this.props.firstName} <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className='Badge__section-info'>
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.twitter}</div>
        </div>
        <div className='Badge__footer'>
          <p>{this.props.meeting}</p>
        </div>
      </div>
    );
  }
}

export default Badge;
