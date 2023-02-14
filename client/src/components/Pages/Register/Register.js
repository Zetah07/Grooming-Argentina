import React from 'react'

const Register = () => {
  return (
    <div className='container'>
        <h1>Register</h1>
        <input type='email' placeholder='email' />
        <input type='password' placeholder='password' />
        <input type='password' placeholder='confirm password' />
        <button>Register</button>
    </div>
  )
}

export default Register