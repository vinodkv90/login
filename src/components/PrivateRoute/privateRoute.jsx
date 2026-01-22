import { Navigate } from "react-router";
import { PAGE_ROUTES } from "../../constants/pageRoutes";
import { useContext, useEffect } from "react";
import { AuthContext } from "../GlobalProvider/globalProvider";
import axios from "axios";

const PrivateRoute = ({ children }) => {

    const {auth, setAuth} = useContext(AuthContext);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get({
                    method: "GET",
                    url: `http://localhost:8080/api/home/me`,
                    withCredentials: true
                });
                setAuth(res.data.user);
            } catch (err) {
                console.log(`error: ${err}`)
                setAuth(false);
            }
        };

        checkAuth();
    }, []);

  if (auth === false) {
    return <Navigate to={PAGE_ROUTES.login} replace />;
  }

  return children;

};

export default PrivateRoute;
