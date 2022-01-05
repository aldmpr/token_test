import React from 'react';
import './Footer.scss';
import { footerLinks } from '../../shared';
import { FooterLink } from '../../types/type';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__text">
        © 2021 All rights reserved.
      </div>
      <div className="Footer__links">
        {footerLinks.map((item: FooterLink) => (
          <a
            key={item.id}
            href={item.href}
            className="links__item"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="Footer__text">
        Contact us: ask@test.capital
      </div>
    </div>
  );
};

export default Footer;
