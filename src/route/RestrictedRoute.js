import { selectAuthReducer } from 'pages/login/selectors';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  redirectTo = '/',
  component: Component,
  ...routerProps
}) => {
  const { isLoggedIn } = useSelector(selectAuthReducer);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
