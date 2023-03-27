import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = (): JSX.Element => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (!isAuthenticated && !isLoading) {
    return <Navigate to='/login' replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
