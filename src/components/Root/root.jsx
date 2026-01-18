import { Outlet } from 'react-router'
import GlobalProvider from '../GlobalProvider/globalProvider'

const Root = () => {
  return (
    <GlobalProvider>
      <Outlet />
    </GlobalProvider>
  )
}

export default Root