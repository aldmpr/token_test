import React from 'react';
import logo from '../../images/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <div className="Header">
      <a href="/test-capital-task/" className="Header__link">
        <img src={logo} alt="Test Capital logo" />
      </a>
    </div>
  );
};

export default Header;
