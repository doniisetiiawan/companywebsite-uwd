import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

const selectedStyle = {
  backgroundColor: 'white',
  color: 'slategray',
};

export default function AboutMenu(props) {
  const { match } = props;
  return (
    <div className="about-menu">
      <li>
        <NavLink
          to="/about"
          style={match.isExact ? selectedStyle : {}}
        >
          [Company]
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about/history"
          activeStyle={selectedStyle}
        >
          [History]
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about/services"
          activeStyle={selectedStyle}
        >
          [Services]
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about/location"
          activeStyle={selectedStyle}
        >
          [Location]
        </NavLink>
      </li>
    </div>
  );
}

AboutMenu.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
