// // ProtectedRoute.js

// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Navigate } from "react-router-dom";

// export const ProtectedRoute = ({ children, redirectTo = "/login" }) => {
//   const { authState } = useContext(AuthContext);

//   if (!authState.isAuthenticated) {
//     return <Navigate to={redirectTo} />;
//   }

//   return children;
// };
