import React from 'react';

// same as class Header below, this is a stateless Functional Component
const Header = props => (

    <header className="top">
      <h1>Truffles</h1>
      <h3 className="tagline">
        <span>{ props.tagline }</span>
      </h3>
    </header>
  );

export default Header;
