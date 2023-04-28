import { selectAuthReducer } from 'pages/login/selectors';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
  redirectTo = '/',
  component: Component,
  ...routerProps
}) => {
  const { isLoggedIn, isRefreshing } = useSelector(selectAuthReducer);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
