import axios from "axios";
import { useNavigate } from "react-router";
import { PAGE_ROUTES } from "../../constants/pageRoutes";
import { API_ROUTES } from "../../constants/apiRoutes";

const useLogout = ({ setAuth }) => {

    const navigate = useNavigate();

    const logout = async () => {
        try {
            await axios({
                method: 'POST',
                url: API_ROUTES.logout
            }, {}, {
                withCredentials: true
            });
        } finally {
            setAuth({
                isAuthenticated: false,
                user: null
            });
            navigate(PAGE_ROUTES.login);
        }
    };

    return {logout}
}

export default useLogout