/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useAuth } from '../../Firebase/Auth-context';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

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

  const {signup, user, emailVerification} =useAuth();

  const handleSubmit = async (e) => {
    setError("");
    try{
      history.push('./verification');
      await signup(form.email, form.password);
      await axios.post('/createUser', form);
      let response = await axios.get(`/getUserByEmail?email=${form.email}`);
      //linea para encriptar informacion
      localStorage.setItem("user", JSON.stringify(response.data)); // ejemplo
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

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