import React from 'react';

const Header = (props) => (
  <div className="c4u-header">
    <h1 className="c4u-title">{props.title}</h1>
    <h2 className="c4u-subtitle">{props.subtitle}</h2>
  </div>
);

export default Header;
