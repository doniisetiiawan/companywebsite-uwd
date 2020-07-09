import PropTypes from 'prop-types';
import React from 'react';
import MainMenu from '../menus';

export default function PageTemplate(props) {
  const { children } = props;
  return (
    <div className="page">
      <MainMenu />
      {children}
    </div>
  );
}

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
