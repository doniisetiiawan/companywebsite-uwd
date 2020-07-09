import PropTypes from 'prop-types';
import React from 'react';

export default function Whoops404(props) {
  const { location } = props;
  return (
    <div className="whoops-404">
      <h1>Resource not found at '{location.pathname}'</h1>
    </div>
  );
}

Whoops404.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
