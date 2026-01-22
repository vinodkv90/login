import axios from "axios"
import { getApiHeaders } from "../../utils/getApiHeaders"
import { useNavigate } from "react-router"

export const useLogin = (setAuth) => {

    const navigate = useNavigate();

    const onSubmit = (data) => {
        const axiosConfig = getApiHeaders(
            "POST",
            "/auth/login",
            data
        )
        axios({
            method: axiosConfig.method,
            url: axiosConfig.url,
            data: axiosConfig.data
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                setAuth(true);
                navigate('/', { replace: true })
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    return { onSubmit  }

}