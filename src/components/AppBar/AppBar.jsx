import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AppBar.module.scss';
import Usermenu from 'components/usermenu/Usermenu';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'contacts', text: 'Contacts' },
  { href: 'login', text: 'Login' },
  { href: 'register', text: 'Register' },
];

const AppBar = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.list}>
          {navItems.map(({ href, text }, i) => (
            <li key={i}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  isActive ? `${style.active}` : `${style.link}`
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
        <Usermenu />
      </nav>
    </header>
  );
};

export default AppBar;
