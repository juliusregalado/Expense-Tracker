import React from 'react';

const Header = (props) => (
  <div className="exp-header">
    <h1 className="exp-title">{props.title}</h1>
    <h2 className="exp-subtitle">{props.subtitle}</h2>
  </div>
);

export default Header;
