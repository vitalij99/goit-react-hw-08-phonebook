import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { refreshUserThunk } from 'redux/authentication/thunk';
import PrivateRoute from 'route/PrivateRoute';
import RestrictedRoute from 'route/RestrictedRoute';
import Layaout from 'pages/layaout/layaout';
import { selectIsRefreshing } from 'pages/login/selectors';
import { Home } from 'pages/home/Home';

const Contacts = lazy(() => import('../pages/contacts/Contacts'));
const Login = lazy(() => import('../pages/login/Login'));
const Register = lazy(() => import('../pages/register/Register'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layaout />}>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </>
    )
  );
};
