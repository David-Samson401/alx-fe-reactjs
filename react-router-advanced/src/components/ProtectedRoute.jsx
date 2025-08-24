
import React, { useState } from "react";
import { Navigate } from "react-router-dom";


function useAuth() {
  const [isAuthenticated] = useState(false); // mock auth state
  return { isAuthenticated };
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
