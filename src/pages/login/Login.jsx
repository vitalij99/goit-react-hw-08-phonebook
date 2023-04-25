import React from 'react';
import style from './login.module.scss';
import Btn from 'components/btn/btn';

const options = [
  { name: 'email', text: 'Email:', type: 'email' },
  { name: 'password', text: 'Пароль:', type: 'password' },
];

export const Login = () => {
  return (
    <div className={style.form}>
      <form>
        {options.map(createImput)}
        <Btn type={'submit'}>login</Btn>
      </form>
    </div>
  );
};

export function createImput({ name, text, type }) {
  return (
    <label key={name} className={style.label}>
      <span className={style.text}>{text}</span>
      <input type={type} name={name} className={style.imput} required />
    </label>
  );
}
