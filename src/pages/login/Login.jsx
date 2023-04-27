import React from 'react';
import style from './login.module.scss';
import Btn from 'components/btn/btn';
import { useDispatch } from 'react-redux';
import { selectAuthReducer } from './selectors';
import { loginThunk } from 'redux/authentication/thunk';

const options = [
  { name: 'email', text: 'Email:', type: 'email' },
  { name: 'password', text: 'Пароль:', type: 'password' },
];

export const Login = () => {
  const dispatch = useDispatch(selectAuthReducer);
  const handleOnSubmit = eve => {
    eve.preventDefault();
    const { email, password } = eve.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };

    dispatch(loginThunk(user));
    eve.target.reset();
  };
  return (
    <div className={style.form}>
      <form onSubmit={handleOnSubmit}>
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
