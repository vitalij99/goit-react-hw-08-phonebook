import React from 'react';
import style from '../login/login.module.scss';

import { createImput } from 'pages/login/Login';
import Btn from 'components/btn/btn';
import { useDispatch } from 'react-redux';
import { singnupThunk } from 'redux/authentication/thunk';
import { selectAuthReducer } from 'pages/login/selectors';

const options = [
  { name: 'name', text: "Ім'я:", type: 'text' },
  { name: 'email', text: 'Email:', type: 'email' },
  { name: 'password', text: 'Пароль:', type: 'password' },
];

function Register() {
  const dispatch = useDispatch(selectAuthReducer);
  const handleOnSubmit = eve => {
    eve.preventDefault();
    const { email, password, name } = eve.target.elements;
    const user = {
      email: email.value,
      password: password.value,
      name: name.value,
    };

    dispatch(singnupThunk(user));
    eve.target.reset();
  };
  return (
    <div className={style.form}>
      <form onSubmit={handleOnSubmit}>
        {options.map(createImput)}
        <Btn type={'submit'}>Register</Btn>
      </form>
    </div>
  );
}

export default Register;
