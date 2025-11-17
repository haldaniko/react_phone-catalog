import * as React from 'react';
import './Footer.scss';

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer__brand">
        <a href="#home" className="footer__logo" aria-label="Home">
          <span className="footer__logo-text">
            Nice
            <img
              className="footer__logo-image"
              alt="Nice Gadgets Logo"
              src="/logo.png"
            />
          </span>
          <span className="footer__logo-text">Gadgets</span>
        </a>
      </div>

      <div className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <a className="footer__nav-link" href="#">
              Github
            </a>
          </li>
          <li className="footer__nav-item">
            <a className="footer__nav-link" href="#">
              Contacts
            </a>
          </li>
          <li className="footer__nav-item">
            <a className="footer__nav-link" href="#">
              Rights
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__actions">
        <p className="footer__action">Back to top</p>
        <button className="footer__action-button">
          <img src="/svg/Vector_forward.svg" alt="Heart" />
        </button>
      </div>
    </div>
  </footer>
);
