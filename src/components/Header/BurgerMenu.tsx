import * as React from 'react';

interface BurgerMenuProps {
  open: boolean;
  onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ open, onClose }) => {
  React.useEffect(() => {
    if (!open) {
      return;
    }

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handler);

    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="header__burger"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        className="header__burger-close"
        aria-label="Close menu"
        onClick={onClose}
      >
        <img src="/svg/Close.svg" alt="" width={10} height={10} />
      </button>
      <ul className="header__burger-list">
        {['Home', 'Phones', 'Tablets', 'Accessories'].map(item => (
          <li key={item} className="header__burger-item">
            <a
              href={`#${item.toLowerCase()}`}
              className="header__burger-link"
              onClick={onClose}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
