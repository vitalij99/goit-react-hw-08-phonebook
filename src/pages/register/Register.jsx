import React from 'react';
import style from '../login/login.module.scss';

import { createImput } from 'pages/login/Login';
import Btn from 'components/btn/btn';

const options = [
  { name: 'name', text: "Ім'я:", type: 'text' },
  { name: 'email', text: 'Email:', type: 'email' },
  { name: 'password', text: 'Пароль:', type: 'password' },
];

function Register() {
  return (
    <div className={style.form}>
      <form>
        {options.map(createImput)}
        <Btn type={'submit'}>Register</Btn>
      </form>
    </div>
  );
}

export default Register;
