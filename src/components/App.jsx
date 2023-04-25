import { Contacts } from 'pages/contacts/Contacts';
import { Home } from 'pages/home/Home';
import Layaout from 'pages/layaout/layaout';
import { Login } from 'pages/login/Login';
import Register from 'pages/register/Register';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layaout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};
