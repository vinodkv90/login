import { useState } from 'react'
import LoginScreen from '../LoginScreen'
import RegisterScreen from '../RegisterScreen/registerScreen'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <section className="w-full h-screen flex items-center justify-center">
        {isLogin ? <LoginScreen /> : <RegisterScreen />}
    </section>
  )
}

export default Auth