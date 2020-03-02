import React, {useState} from 'react';
import links from './constants/links';
import socialIcons from './constants/social-icons';
import {FaAlignRight} from 'react-icons/fa';
import styles from '../css/navbar.module.css';
import logo from '../images/logo.svg';

const Navbar = () => {
  const [isOpen, setNav] = useState (false);
  const toggleNav = () => {
    setNav (isOpen => !isOpen);
  };
  console.log(isOpen)
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="this is a logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
          <FaAlignRight className={styles.logoIcon} />

          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
