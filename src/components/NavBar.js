import React, {useState} from 'react';
import {Link} from 'gatsby';
import {FaAlignRight} from 'react-icons/fa';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import styles from '../css/navbar.module.css';
import logo from '../images/logo.svg';

const Navbar = () => {
  const [isOpen, setNav] = useState (false);
  const toggleNav = () => {
    setNav (isOpen => !isOpen);
  };
  console.log (isOpen);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="this is a logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />

          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map ((item, index) => {
          
            return (
              <li key={index}>
                <Link to={item.path}>
                  {item.text}
                </Link>
              </li>
            );
          })}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
