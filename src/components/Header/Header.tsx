import * as React from 'react';
import './Header.scss';

export const Header: React.FC = () => (
  <header className="header" role="banner">
    <div className="header__inner">
      <div className="header__brand">
        <a href="#home" className="header__logo" aria-label="Home">
          <span className="header__logo-text">
            Nice
            <img
              className="header__logo-image"
              alt="Nice Gadgets Logo"
              src="/logo.png"
            />
          </span>
          <span className="header__logo-text">Gadgets</span>
        </a>
      </div>

      <nav className="header__nav" aria-label="Main navigation">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a
              className="header__nav-link header__nav-link--active"
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#phones">
              Phones
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#tablets">
              Tablets
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#accessories">
              Accessories
            </a>
          </li>
        </ul>
      </nav>

      <div className="header__actions">
        <button
          className="header__action header__action--likes"
          aria-label="Likes"
          type="button"
        >
          <span className="header__action-icon" aria-hidden="true">
            <img
              className="header__icon"
              src="/svg/Heart.svg"
              width={16}
              height={16}
              alt=""
              role="presentation"
            />
          </span>
        </button>
        <button
          className="header__action header__action--cart"
          aria-label="Cart"
          type="button"
        >
          <span className="header__action-icon" aria-hidden="true">
            <img
              className="header__icon"
              src="/svg/Bag.svg"
              width={16}
              height={16}
              alt=""
              role="presentation"
            />
          </span>
        </button>
        <button className="header__burger" aria-label="Cart" type="button">
          <span className="header__action-icon" aria-hidden="true">
            <img
              className="header__icon"
              src="/svg/Union.svg"
              width={16}
              height={16}
              alt=""
              role="presentation"
            />
          </span>
        </button>
      </div>
    </div>
  </header>
);
