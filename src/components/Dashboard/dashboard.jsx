import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthContext } from '../GlobalProvider/globalProvider'

const Dashboard = () => {
  const { auth } = useContext(AuthContext)
  return (
    auth ? <Navigate to="/" replace /> : <Outlet />
  )
}

export default Dashboard