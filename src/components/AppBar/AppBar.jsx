import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AppBar.module.scss';
import Usermenu from 'components/usermenu/Usermenu';
import { useSelector } from 'react-redux';
import { selectAuthReducer } from 'pages/login/selectors';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'login', text: 'Login' },
  { href: 'register', text: 'Register' },
];
const navItemsIsLoggend = [
  { href: '/', text: 'Home' },
  { href: 'contacts', text: 'Contacts' },
];
function markup({ href, text }, i) {
  return (
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
  );
}
const AppBar = () => {
  const { isLoggedIn, isRefreshing } = useSelector(selectAuthReducer);

  return (
    <header className={style.header}>
      <nav>
        <ul className={style.list}>
          {!isLoggedIn && !isRefreshing && navItems.map(markup)}
          {isLoggedIn && !isRefreshing && navItemsIsLoggend.map(markup)}
        </ul>
        {isLoggedIn && <Usermenu />}
      </nav>
    </header>
  );
};

export default AppBar;
