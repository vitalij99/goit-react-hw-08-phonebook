import { selectUser } from 'pages/login/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './userMenu.module.scss';
import Btn from 'components/btn/btn';
import { logoutThunk } from 'redux/authentication/thunk';

const Usermenu = () => {
  const { name, email } = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logoutThunk());

  return (
    <div className={style.usermenu}>
      <p className={style.user}>{name}</p>
      <p className={style.user}>{email}</p>
      <Btn fn={handleClick}>Exit</Btn>
    </div>
  );
};

export default Usermenu;
