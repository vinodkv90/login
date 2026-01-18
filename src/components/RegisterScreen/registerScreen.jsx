import React from 'react'
import Input from '../Input'
import Button from '../Button'
import { Link } from 'react-router'

const RegisterScreen = () => {
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <Input label="Email" type="email" labelClass={`text-xs !font-semibold`} />
        <Input label="Password" type="password" labelClass={`text-xs !font-semibold`} />
        <Button className="w-full mt-7">Register</Button>
        <Link to="/" className="text-sm font-medium text-foreground hover:underline block text-center mt-4">
          Already have an account? Login
        </Link>
    </div>
  )
}

export default RegisterScreen