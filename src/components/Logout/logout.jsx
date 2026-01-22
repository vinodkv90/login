import { useContext } from 'react'
import { AuthContext } from '../GlobalProvider/globalProvider';
import useLogout from './useLogout';
import Button from '../Button'

const Logout = () => {

    const { setAuth } = useContext(AuthContext);
    const { logout } = useLogout({ setAuth });

    return <Button variant='primary' onClick={logout}>Logout</Button>;
}

export default Logout