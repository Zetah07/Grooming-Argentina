import React from 'react'

const Login = () => {
  
  return (
    <div className='container'>
    <h1>Login</h1>
    <input type='email' placeholder='email' />
    <input type='password' placeholder='password' />
    <input type='password' placeholder='confirm password' />
    <button className='btn-primary'>Login</button>
</div>
  )
}

export default Login