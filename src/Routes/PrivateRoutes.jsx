import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-80 flex items-center justify-center space-x-2 animate-bounce">
        <div className="w-8 h-8 bg-primary rounded-full"></div>
        <div className="w-8 h-8 bg-secondary rounded-full"></div>
        <div className="w-8 h-8 bg-accent rounded-full"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace ></Navigate>



};

export default PrivateRoutes;