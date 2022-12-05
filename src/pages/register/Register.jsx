import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'firstName') {
      setFirstname(value);
    }
    if (id === 'lastName') {
      setLastname(value);
    }
    if (id === 'email') {
      setEmail(value);
    }
    if (id === 'password') {
      setPassword(value);
    }
    if (id === 'username') {
      setUsername(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post('https://gamepad-api.onrender.com/auth/register', {
          email,
          username,
          password,
          firstname,
          lastname,
        })
        .then((res) => {
          if (res.status === 201) {
            navigate('/login');
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container register'>
      <div className='left'>
        <div className='header'>
          <h2 className='animation a1'>Sign up</h2>
          <h4 className='animation a2'>Register Your account</h4>
        </div>
        <div className='form'>
          <input
            id='firstName'
            type='text'
            className='form-field animation a3'
            placeholder='First Name'
            onChange={handleChange}
          />
          <input
            id='lastName'
            type='text'
            className='form-field animation a4'
            placeholder='Last Name'
            onChange={handleChange}
          />
          <input
            id='username'
            type='text'
            className='form-field animation a5'
            placeholder='Username'
            onChange={handleChange}
          />
          <input
            id='email'
            type='email'
            className='form-field animation a6'
            placeholder='Email Address'
            onChange={handleChange}
          />
          <input
            id='password'
            type='password'
            className='form-field animation a7'
            placeholder='Password'
            onChange={handleChange}
          />

          <p className='animation a8'>
            <a href='#'>Forgot Password</a>
          </p>
          <button className='animation a9' onClick={handleSubmit}>
            LOGIN
          </button>
        </div>
      </div>
      <div className='right'>
        <img src='/register.jpg' alt='register-img' />
      </div>
    </div>
  );
};

export default Register;
