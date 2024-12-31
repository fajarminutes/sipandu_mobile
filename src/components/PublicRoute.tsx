import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
    const token = localStorage.getItem("access_token");
    return !!token;
};

const PublicRoute = ({ children }) => {
    if (isAuthenticated()) {
        return <Navigate to="/home" replace />;
    }

    return children;
};

export default PublicRoute;
