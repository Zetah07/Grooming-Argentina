/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';


const Register = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { fullName, email, password, confirmPassword } = form;
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password!== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      const newUser = {
        fullName,
        email,
        password,
      };
      fetch('http://localhost:3001/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
      .then((res) => res.json())
      .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            history.push('/login');
          }
        });
    }
  };

  return (
    <div className='container'>
        <h1>Register</h1>
        <input type='email'  placeholder='email' onChange={(e) => handleChange(e)} />
        <input type='password' placeholder='password' onChange={(e) => handleChange(e)} />
        <input type='password' placeholder='confirm password' onChange={(e) => handleChange(e)} />
        <button onClick={handleSubmit}>Register</button>
        {error && <span>{error}</span>}
        <h4>
          <Link to='/login'>Already have an account?</Link>
        </h4>
    </div>
  )
}

export default Register