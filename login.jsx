import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './style/register.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      if (response.data === 'success') {
        console.log('Login successful');
        navigate('/Home');
      } else {
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  return (
    
      <form  onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>Don't have an account?</p>
        <a href="/register">Click here</a>
      </form>
    
  );
}

export default Login;
