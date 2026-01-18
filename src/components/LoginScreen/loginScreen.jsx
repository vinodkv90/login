import React, { useContext } from 'react'
import Input from '../Input'
import Button from '../Button'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import { useLogin } from './useLogin'
import { AuthContext } from '../GlobalProvider/globalProvider'

const LoginScreen = () => {
  const { register, handleSubmit } = useForm()
  const { setAuth } = useContext(AuthContext);
  const { onSubmit } = useLogin(setAuth)
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email" type="email" {...register("email")} labelClass={`text-xs !font-semibold`} />
          <Input label="Password" type="password" {...register("password")} labelClass={`text-xs !font-semibold`} />
          <Button type="submit" className="w-full mt-7">Login</Button>
        </form>
        <Link to="/register" className="text-sm font-medium text-foreground hover:underline block text-center mt-4">
          Don't have an account? Register
        </Link>
    </div>
  )
}

export default LoginScreen