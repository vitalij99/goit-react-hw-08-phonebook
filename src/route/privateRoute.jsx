import { selectIsLoading } from 'pages/login/selectors';

import { useSelector } from 'react-redux';
import { Route, redirect } from 'react-router-dom';

export const PrivateRoute = ({
  children,
  redirectTo = '/',
  ...routerProps
}) => {
  const isLoggedIn = useSelector(selectIsLoading);

  return (
    <Route {...routerProps}>
      {isLoggedIn ? children : redirect(redirectTo)}
    </Route>
  );
};

export default PrivateRoute;
