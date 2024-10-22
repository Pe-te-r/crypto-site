import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../AuthContext";

// Role-based route protection component
const RoleProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const { user }: any = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          return <Redirect to="/login" />;  // Redirect to login if not authenticated
        }

        if (allowedRoles && !allowedRoles.includes(user.role)) {
          return <Redirect to="/unauthorized" />;  // Redirect if user doesn't have the right role
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default RoleProtectedRoute;
