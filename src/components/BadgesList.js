import React from 'react';
import { Link } from 'react-router-dom';

import twitterLogo from '../images/twitterLogo.svg';
import './styles/BadgesList.css';
class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>Badge don't found</h3>
          <Link className='btn btn-primary' to='/badges/new'>
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <div className='BadgesList'>
        <ul className='list-unstyled'>
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <div className='BadgesListItem'>
                  <img
                    className='BadgesListItem__avatar'
                    alt='BadgesListItem avatar'
                    src={badge.avatarUrl}
                  />
                  <div className='BadgeListItem__info'>
                    {badge.firstName} {badge.lastName}
                    <div className='BadgeListItem__twitter'>
                      <img src={twitterLogo} alt='Twitter Logo'></img>
                      <a href='./'>@{badge.twitter}</a>
                    </div>
                    {badge.jobTitle}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
