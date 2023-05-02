import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HOME_PAGE } from '../../data';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link className={styles.link} to={HOME_PAGE}>
          <h1 className={styles.header_title}>Awesome Kanban Board</h1>
        </Link>
        <div className={styles.dropdown}>
          <div
            className={styles.user_avatar}
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            {showDropdown ? (
              <div className={styles.up_arrow}></div>
            ) : (
              <div className={styles.down_arrow}></div>
            )}
          </div>
          {showDropdown && (
            <>
              <div className={styles.little_romb}></div>
              <div className={styles.dropdown_menu}>
                <Link
                  to={`${HOME_PAGE}/profile`}
                  className={styles.menu_item}
                  onClick={() => setShowDropdown(false)}
                >
                  Profile
                </Link>
                <Link
                  to={HOME_PAGE}
                  className={styles.menu_item}
                  onClick={() => setShowDropdown(false)}
                >
                  Log Out
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
