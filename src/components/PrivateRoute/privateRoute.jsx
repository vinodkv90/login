import { Navigate } from "react-router";
import { PAGE_ROUTES } from "../../constants/pageRoutes";
import { useContext } from "react";
import { AuthContext } from "../GlobalProvider/globalProvider";

const PrivateRoute = ({ children }) => {
    const { auth } = useContext(AuthContext);
    if (!auth) {
        return <Navigate to={PAGE_ROUTES.login} replace />;
    }
    return children;
};

export default PrivateRoute;
