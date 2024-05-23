import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to={"/"} />;
  } else {
    if (allowedRoles.includes(user.role)) {
      return <Outlet />;
    } else {
      return <Navigate to={"/"} />;
    }
  }
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.array,
};

export default ProtectedRoute;
